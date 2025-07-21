import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn, formatFileSize } from "@/lib/utils";
import { useUploadFiles } from "@/services/compress/action";
import LoadingCompress from "./loading-compress";
import CompressError from "./error";
import CompressSuccess from "./success";

interface CompressPreviewProps {
  url: string;
  name: string;
  size: number;
  file: File;
  pageType: string;
  resetUpload: () => void;
}

const CompressPreview = ({
  url,
  name,
  size,
  file,
  pageType,
  resetUpload,
}: CompressPreviewProps) => {
  const { data, mutate, isError, isPending, isSuccess, isIdle } =
    useUploadFiles();

  return (
    <>
      {isIdle && (
        <>
          <div className="flex flex-row items-center justify-center gap-4 py-4">
            <div className="h-auto">
              {pageType === "video" ? (
                <div className="relative flex flex-col items-center justify-center">
                  <video
                    src={url}
                    controls
                    className="w-100 h-40 rounded-md"
                    style={{ aspectRatio: "16/9" }}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "absolute top-1 right-1 h-4 w-4 rounded-full bg-white/50 hover:bg-white"
                    )}
                    onClick={resetUpload}
                    disabled={isPending}
                  >
                    <X className="w-4 h-4 cursor-pointer" />
                  </Button>
                </div>
              ) : pageType === "image" ? (
                <Image src={url} alt={name} width={144} height={144} />
              ) : (
                <iframe
                  src={url}
                  className="w-40 h-60 sm:w-44 overflow-hidden scrollbar-hide"
                  title={name}
                />
              )}
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
                  className="h-8 px-3 text-xs rounded-md bg-blue-500 text-white hover:bg-blue-600"
                  disabled={isPending}
                >
                  Compress Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {isPending && (
        <LoadingCompress resetUpload={resetUpload} pageType={pageType} />
      )}

      {isSuccess && data?.data && (
        <CompressSuccess
          data={data ? data : null}
          fileType={pageType}
          resetUpload={resetUpload}
        />
      )}

      {isError && data && <CompressError resetUpload={resetUpload} />}
    </>
  );
};

export default CompressPreview;
