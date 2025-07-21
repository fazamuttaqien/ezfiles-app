import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUploadFiles } from "@/services/compress/action";
import LoadingCompress from "./loading-compress";
import CompressError from "./error";
import CompressSuccess from "./success";

interface CompressPreviewProps {
  url: string;
  name: string;
  size: number;
  file: File;
  type: string;
  resetUpload: () => void;
}

const CompressPreview = ({
  url,
  name,
  size,
  file,
  type,
  resetUpload,
}: CompressPreviewProps) => {
  const { data, mutate, isError, isPending, isSuccess, isIdle } =
    useUploadFiles();

  return (
    <>
      {isIdle && (
        <>
          <div className="flex flex-row items-center justify-center gap-4 py-4">
            <div className="relative p-3 bg-slate-50 rounded-md">
              {type === "video" ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <video
                    src={url}
                    controls
                    className="w-full h-auto rounded-2xl"
                    style={{ aspectRatio: "16/9" }}
                  />
                </div>
              ) : type === "image" ? (
                <Image src={url} alt={name} width={144} height={144} />
              ) : (
                <iframe
                  src={url}
                  className="w-40 h-60 sm:w-44 overflow-hidden"
                  title={name}
                />
              )}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "absolute top-4 right-4 h-4 w-4 rounded-full bg-white/50 hover:bg-white"
                )}
                onClick={resetUpload}
                disabled={isPending}
              >
                <X className="w-4 h-4 cursor-pointer" />
              </Button>
            </div>
            <div className="flex flex-col rounded-md p-3 gap-3">
              <div className="flex flex-col items-start gap-0">
                <p>{name}</p>
                <p className="text-gray-400 text-sm">{formatFileSize(size)}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Button
                  onClick={resetUpload}
                  className="h-8 px-3 text-xs rounded-md text-black bg-white hover:text-white hover:bg-black"
                  variant="outline"
                  disabled={isPending}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    mutate([file]);
                  }}
                  className="h-8 px-3 text-xs rounded-md bg-blue-300 text-white hover:bg-blue-400"
                  disabled={isPending}
                >
                  Compress Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {isPending && <LoadingCompress resetUpload={resetUpload} />}

      {isSuccess && data?.data && (
        <CompressSuccess data={data ? data : null} resetUpload={resetUpload} />
      )}

      {isError && data && <CompressError resetUpload={resetUpload} />}
    </>
  );
};

export default CompressPreview;

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
