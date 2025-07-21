import React from "react";
import Image from "next/image";
import { LoadingSpinner } from "../loading-spinner";
import { LineProgressBar } from "../line-progress-bar";

interface LoadingUploadProps {
  fileName: string;
  fileSize: number;
  fileProgress: number;
}

const LoadingUpload = ({
  fileName,
  fileSize,
  fileProgress,
}: LoadingUploadProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-[350px] m-8">
      <div className="flex flex-row items-center justify-center">
        <Image
          src="/assets/images/genie-processing.png"
          alt="genie_processing"
          width={58}
          height={58}
        />
        <div className="flex flex-col items-start pl-4 justify-center">
          <p className="text-[24px] font-bold">Please wait...</p>
          <p className="text-[16px]">Uploading your PDF</p>
        </div>
      </div>
      <div className="w-full shadow-sm p-2 bg-slate-50 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-4">
            <LoadingSpinner size={20} />
            <div>
              <p className="text-gray-800 font-medium leading-tight">
                {fileName}
              </p>
              <p className="text-sm text-gray-500">
                {formatFileSize(fileSize)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-500">75%</p>
            <p className="text-sm text-gray-600">Uploaded</p>
          </div>
        </div>
      </div>
      <LineProgressBar
        progress={fileProgress}
        height={10}
        backgroundColor="#f1f5f9"
        progressColor="#0ea5e9"
        animated={true}
      />
    </div>
  );
};

export default LoadingUpload;

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
