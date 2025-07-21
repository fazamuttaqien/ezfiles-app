import React from "react";
import Image from "next/image";
import { UploadIcon } from "lucide-react";
import { Button } from "../ui/button";

const TourUpload = () => {
  return (
    <>
      <div
        data-tour="fileupload-card"
        className="flex flex-col items-center justify-center gap-2"
      >
        <Image
          src="/assets/images/empty-file.png"
          width={60}
          height={60}
          alt="Empty File"
        />
        <div className="flex flex-col items-center gap-1">
          <p className="font-bold text-md">
            Drag the file or click the button below
          </p>
          <p className="text-sm">Upload the file you want to compress</p>
        </div>
        <Button
          type="button"
          className="bg-sky-500 text-white rounded-lg flex items-center mt-2 px-6 hover:bg-sky-600"
        >
          <UploadIcon className="w-3 h-3" />
          Choose File
        </Button>
      </div>

      <div
        data-tour="filetype-card"
        className="bg-blue-50 rounded-xl px-4 py-2"
      >
        <p className="font-semibold text-sm">What formats can you compress?</p>
        <p className="text-sm text-gray-600">
          .pdf, .mp4, .mkv, .3gp, .avi, .flv, .mov, .jpg, .jpeg, .png
        </p>
      </div>
    </>
  );
};

export default TourUpload;
