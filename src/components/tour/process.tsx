import React from "react";
import CompressLayout from "../layout/compress";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "../loading-spinner";

const TourProcessing = () => {
  return (
    <CompressLayout>
      <div
        className={cn(
          "flex flex-auto items-center justify-center gap-4 rounded-xl border-2 border-dashed border-slate-200"
        )}
      >
        <div className="flex flex-col items-center justify-center p-4">
          <p className="font-bold text-xl">Please wait...</p>
          <p className="text-sm">Uploading and compress your file</p>
          <div className="w-72 shadow-sm py-3 px-4 mt-6 bg-slate-50 rounded-md relative">
            <div className="flex items-start space-x-4">
              <LoadingSpinner size={20} />
              <div>
                <p className="text-gray-800 font-medium leading-tight">
                  Foto kucing.png
                </p>
                <p className="text-sm text-gray-500">7.84 mb</p>
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <X className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
          <Button className="mt-4 px-6 rounded-md text-black bg-white hover:bg-white hover:text-black">
            Cancel
          </Button>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl px-4 py-2">
        <p className="font-semibold text-sm">What formats can you compress?</p>
        <p className="text-sm text-gray-600">
          .pdf, .mp4, .mkv, .3gp, .avi, .flv, .mov, .jpg, .jpeg, .png
        </p>
      </div>
    </CompressLayout>
  );
};

export default TourProcessing;
