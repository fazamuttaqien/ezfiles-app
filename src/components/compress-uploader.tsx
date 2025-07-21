/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoadingUpload from "@/components/compress/loading-upload";
import CompressError from "@/components/compress/error";
import CompressPreview from "./compress/preview";

type UploadStatus = "idle" | "uploading" | "success" | "error";

interface CompressUploaderProps {
  pageType: string;
}

export default function CompressUploader({ pageType }: CompressUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateUpload = async (fileToUpload: File) => {
    setUploadStatus("uploading");
    setUploadProgress(0);
    try {
      const fileSizeInMB = fileToUpload.size / (1024 * 1024);
      const totalTimeMs = Math.max(1000, fileSizeInMB * 1000);
      const updateInterval = totalTimeMs / 100;
      for (let progress = 0; progress <= 100; progress += 1) {
        await new Promise((resolve) => setTimeout(resolve, updateInterval));
        setUploadProgress(progress);
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUploadStatus("success");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setUploadStatus("error");
    }
  };

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      setUploadStatus("error");
      return;
    }
    if (acceptedFiles.length > 0) {
      const currentFile = acceptedFiles[0];
      const maxSize = 100 * 1024 * 1024; // 100 MB
      if (currentFile.size > maxSize) {
        setUploadStatus("error");
        return;
      }
      setFile(currentFile);
      simulateUpload(currentFile);
    }
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    noClick: true,
    noKeyboard: true,
    accept:
      pageType === "video"
        ? {
            "video/*": [".mp4", ".mov", ".avi"],
          }
        : pageType === "image"
        ? {
            "image/*": [".jpeg", ".jpg", ".png", ".gif"],
          }
        : pageType === "pdf"
        ? {
            "application/pdf": [".pdf"],
          }
        : {},
  });

  const resetUpload = () => {
    setFile(null);
    setUploadStatus("idle");
    setUploadProgress(0);
  };

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex flex-auto items-center justify-center gap-4 py-4 rounded-xl border-2 border-dashed border-slate-200"
      )}
    >
      <input {...getInputProps()} />

      {uploadStatus === "idle" && (
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/images/genie-upload.png"
            alt="genie_upload"
            width={144}
            height={144}
            className="w-28 h-auto sm:w-36"
          />
          <div className="flex flex-col items-center justify-center gap-0 mt-2">
            <h2 className="text-foreground text-base sm:text-lg font-semibold text-neutral-800">
              Drag & drop file di sini
            </h2>
            <p className="text-foreground text-sm text-neutral-600 px-2">
              atau klik tombol di bawah untuk memilih file
            </p>
          </div>
          <Button
            type="button"
            onClick={open}
            className="bg-sky-500 text-white rounded-lg flex items-center mt-4 hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Choose File
          </Button>
        </div>
      )}

      {uploadStatus === "uploading" && file && (
        <LoadingUpload
          fileName={file.name}
          fileSize={file.size}
          pageType={pageType}
          progress={uploadProgress}
        />
      )}

      {uploadStatus === "success" && file && (
        <CompressPreview
          name={file.name}
          size={file.size}
          pageType={pageType}
          url={URL.createObjectURL(file)}
          file={file}
          resetUpload={resetUpload}
        />
      )}

      {uploadStatus === "error" && <CompressError resetUpload={resetUpload} />}
    </div>
  );
}
