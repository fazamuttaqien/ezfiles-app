import axios from "axios";

export const API_BASE_URL = process.env.API_BASE_URL || "";

export interface UploadResponse {
  data: {
    jobs: {
      filename: string;
      job_id: string;
    }[];
    upload_id: string;
  };
  message: string;
  success: boolean;
}

export interface JobStatusResponse {
  data: {
    job_id: string;
    status: string;
    created_at: string;
    filename: string;
    finished_at: string;
    message: string;
    original_size: number;
    compressed_size: number;
    compressed_duration: number;
    space_saving_percentage: number;
  };
  success: boolean;
  message: string;
}

export const uploadFiles = async (files: File[]): Promise<UploadResponse> => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });

  try {
    const response = await axios.post<UploadResponse>(
      `https://api-dev.ezfiles.ai/upload-compress/compress`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Failed upload file.");
    }
    throw new Error("A network error occurred.");
  }
};

export const getJobStatus = async (
  jobId: string
): Promise<JobStatusResponse> => {
  try {
    const response = await axios.get<JobStatusResponse>(
      `https://api-dev.ezfiles.ai/upload-compress/status/job/${jobId}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to get job status."
      );
    }
    throw new Error("A network error occurred.");
  }
};

export const downloadFile = async (jobId: string): Promise<void> => {
  try {
    const response = await axios.get(
      `https://api-dev.ezfiles.ai/upload-compress/download/${jobId}`,
      { responseType: "blob" }
    );

    // Create a download link and trigger it
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    // Get filename from Content-Disposition header or use jobId as fallback
    const contentDisposition = response.headers["content-disposition"];
    const filename = contentDisposition
      ? contentDisposition.split("filename=")[1].replace(/["']/g, "")
      : `download-${jobId}.zip`;

    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to download file."
      );
    }
    throw new Error("A network error occurred.");
  }
};
