import Image from "next/image";
import { Button } from "../ui/button";

interface CompressErrorProps {
  resetUpload: () => void;
}

const CompressError = ({ resetUpload }: CompressErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <div className="flex flex-col items-center justify-center md:flex-row p-2">
        <Image
          src="/assets/images/genie-error.png"
          alt="genie_error"
          width={216}
          height={216}
        />
        <div className="flex flex-col items-center md:items-start pl-4">
          <h2 className="text-red-500 font-bold text-2xl">Failed to Upload</h2>
          <p className="text-lg leading-5 mt-2 md:text-start text-center">
            Sorry, an error occured <br />
            while uploading your document
          </p>
        </div>
      </div>
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

export default CompressError;
