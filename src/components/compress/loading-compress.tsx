import Image from "next/image";
import { Button } from "../ui/button";
import { LoadingSpinner } from "../loading-spinner";
import { titleCase } from "@/lib/utils";

interface LoadingCompressProps {
  resetUpload: () => void;
  pageType: string;
}

const LoadingCompress = ({ resetUpload, pageType }: LoadingCompressProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="flex flex-col items-center justify-center md:flex-row px-2">
        <Image
          src="/assets/images/genie-processing.png"
          alt="genie_processing"
          width={58}
          height={58}
        />
        <div className="flex flex-col items-center md:items-start pl-4">
          <h2 className="font-bold text-2xl">
            Compressing {titleCase(pageType)}...
          </h2>
          <p className="text-lg leading-5 mt-2 md:text-start text-center">
            Do not close your browser. <br />
            This might take a few minutes :)
          </p>
        </div>
      </div>
      <LoadingSpinner />
      <Button
        onClick={resetUpload}
        className="h-8 px-6 text-sm rounded-sm text-black bg-white hover:text-black hover:bg-white"
        variant="outline"
      >
        Cancel
      </Button>
    </div>
  );
};

export default LoadingCompress;
