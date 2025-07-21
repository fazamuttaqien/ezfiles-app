import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/button";

const TourSuccess = () => {
  return (
    <>
      <div
        data-tour="filesuccess-card"
        className="flex flex-col items-center justify-center gap-4"
      >
        <Image
          src="/assets/images/check-list.png"
          width={60}
          height={60}
          alt="Empty File"
        />

        <div className="text-center flex-grow">
          <h1 className="text-md lg:text-lg font-semibold text-slate-800">
            Successfully Compressed
          </h1>
          <p className="text-sm md:text-md text-slate-600">
            You have saved 18% of storage space.
          </p>
          <div className="text-md lg:text-lg font-semibold flex items-center justify-center space-x-3">
            <span className="text-green-500 font-bold">100MB</span>
            <ArrowRight className="text-green-500 h-6 w-6" />
            <span className="text-green-500 font-bold">10MB</span>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="font-semibold order-2 md:order-1 "
            >
              Compress Another PDF
            </Button>
            <Button
              size="sm"
              className="bg-blue-400 text-white font-semibold hover:bg-blue-400 order-1 md:order-2 "
            >
              <Download className="h-5 w-5" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl px-4 py-2">
        <p className="font-semibold text-sm">What formats can you compress?</p>
        <p className="text-sm text-gray-600">
          .pdf, .mp4, .mkv, .3gp, .avi, .flv, .mov, .jpg, .jpeg, .png
        </p>
      </div>
    </>
  );
};

export default TourSuccess;
