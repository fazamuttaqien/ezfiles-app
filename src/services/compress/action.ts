import { useMutation, useQuery } from "@tanstack/react-query";
import { downloadFile, getJobStatus, uploadFiles, UploadResponse } from "./api";

export const useUploadFiles = () => {
  return useMutation<UploadResponse, Error, File[]>({
    mutationFn: uploadFiles,
  });
};

export const useJobStatus = (jobId: string) => {
  return useQuery({
    queryKey: ["compress-job-status", jobId],
    queryFn: () => getJobStatus(jobId),
    enabled: !!jobId,
  });
};

export const useDownloadFile = () => {
  return useMutation<void, Error, string>({
    mutationFn: downloadFile,
  });
};
