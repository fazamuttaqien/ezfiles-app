import React from "react";
import Image from "next/image";
import { LoadingSpinner } from "../loading-spinner";
import { LineProgressBar } from "../line-progress-bar";
import { formatFileSize, titleCase } from "@/lib/utils";

interface LoadingUploadProps {
  fileName: string;
  fileSize: number;
  pageType: string;
  progress: number;
}

const LoadingUpload = ({
  fileName,
  fileSize,
  pageType,
  progress,
}: LoadingUploadProps) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));
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
          <p className="text-[16px]">Uploading your {titleCase(pageType)}</p>
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
            <span className="text-xl font-bold text-blue-500">
              {Math.round(clampedProgress)}{" "}
              <span className="text-black">%</span>
            </span>
            <p className="text-sm text-gray-600">Uploaded</p>
          </div>
        </div>
      </div>
      <LineProgressBar
        progress={progress}
        height={10}
        backgroundColor="#f1f5f9"
        progressColor="#0ea5e9"
        animated={true}
      />
    </div>
  );
};

export default LoadingUpload;
