import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  FileDown,
  FileText,
  FileUp,
  FileVideo,
  ImageIcon,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { UploadResponse } from "@/services/compress/api";
import { useDownloadFile, useJobStatus } from "@/services/compress/action";
import { formatFileSize, titleCase } from "@/lib/utils";
import { CircularProgress } from "@/components/circular-progress";

interface JobProps {
  resetUpload: () => void;
  data: UploadResponse | null;
  fileType: string;
}

const CompressSuccess = ({ data, resetUpload, fileType }: JobProps) => {
  const featureIconProps = {
    className: "h-3 w-3 text-blue-600",
    strokeWidth: 2,
  };

  const {
    data: dataJobStatus,
    // isLoading: isLoadingJobStatus,
    // error: errorJobStatus,
  } = useJobStatus(data?.data.jobs[0].job_id || "");

  const {
    mutate: downloadFile,
    // isPending: isLoadingDownloadFile,
    // error: errorDownloadFile,
  } = useDownloadFile();

  const handleDownload = () => {
    downloadFile(data?.data.jobs[0].job_id || "");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0 hidden lg:block">
          <Image
            src="/assets/images/genie-success.png"
            alt="genie_success"
            width={108}
            height={108}
          />
        </div>
        <div className="text-center flex-grow">
          <h1 className="text-lg lg:text-xl font-bold text-slate-800">
            Successfully Compressed
          </h1>
          <p className="text-md md:text-lg text-slate-600">
            You have saved{" "}
            {Math.max(
              0,
              Math.min(100, dataJobStatus?.data.space_saving_percentage || 0)
            )}
            % of storage space.
          </p>
          <div className="text-lg lg:text-xl font-semibold flex items-center justify-center space-x-3">
            <span className="text-green-500 font-bold">
              {formatFileSize(dataJobStatus?.data.original_size || 0)}
            </span>
            <ArrowRight className="text-green-500 h-6 w-6" />
            <span className="text-green-500 font-bold">
              {formatFileSize(dataJobStatus?.data.compressed_size || 0)}
            </span>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={resetUpload}
              variant="outline"
              size="sm"
              className="font-semibold"
            >
              Compress Another {titleCase(fileType)}
            </Button>
            <Button
              size="sm"
              onClick={handleDownload}
              className="bg-blue-400 text-white font-semibold hover:bg-blue-400"
            >
              <Download className="h-5 w-5" />
              Download {titleCase(fileType)}
            </Button>
          </div>
        </div>
        <div className="w-20 h-20 flex-shrink-0">
          <CircularProgress
            progress={dataJobStatus?.data.space_saving_percentage || 0}
            size={85}
            strokeWidth={10}
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <Separator className="my-4" />
        <div>
          <h2 className="text-sm font-bold text-slate-800 mb-2 flex items-center">
            <Sparkles className="mr-3 h-4 w-4 text-yellow-500" />
            Try Our Other Features
          </h2>

          <div className="grid grid-cols-3 gap-x-2">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 text-sm">
                File Compression
              </h3>
              <FeatureItem
                icon={<FileText {...featureIconProps} />}
                text="PDF Compression"
              />
              <FeatureItem
                icon={<FileVideo {...featureIconProps} />}
                text="Video Compression"
              />
              <FeatureItem
                icon={<ImageIcon {...featureIconProps} />}
                text="Image Compression"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-800 text-sm">
                File Conversion From PDF
              </h3>
              <div className="grid grid-cols-2 gap-x-2">
                <div className="space-y-1">
                  <FeatureItem
                    icon={<FileDown {...featureIconProps} />}
                    text="PDF To Word"
                  />
                  <FeatureItem
                    icon={<FileDown {...featureIconProps} />}
                    text="PDF To Excel"
                  />
                  <FeatureItem
                    icon={<FileDown {...featureIconProps} />}
                    text="PDF To PPT"
                  />
                </div>
                <div className="space-y-1">
                  <FeatureItem
                    icon={<FileDown {...featureIconProps} />}
                    text="PDF To Image"
                  />
                  <FeatureItem
                    icon={<FileDown {...featureIconProps} />}
                    text="PDF To TXT"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 text-sm">
                File Conversion To PDF
              </h3>
              <FeatureItem
                icon={<FileUp {...featureIconProps} />}
                text="Word To PDF"
              />
              <FeatureItem
                icon={<ImageIcon {...featureIconProps} />}
                text="Image To PDF"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompressSuccess;

const FeatureItem = ({
  icon,
  text,
  href = "#",
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <Link
    href={href}
    className="flex items-center group space-x-3 rounded-lg hover:bg-slate-50 transition-colors"
  >
    <div className="bg-blue-100 p-1 rounded-sm group-hover:bg-blue-200 transition-colors">
      {icon}
    </div>
    <span className="text-slate-700 font-medium text-xs group-hover:text-slate-900 transition-colors">
      {text}
    </span>
  </Link>
);

// const ProgressCircle = ({ percentage }: { percentage: number }) => {
//   return (
//     <div className="relative w-20 h-20 flex-shrink-0">
//       <svg className="w-full h-full" viewBox="0 0 100 100">
//         {/* Lingkaran Latar Belakang */}
//         <circle
//           className="text-slate-200"
//           strokeWidth="10"
//           stroke="currentColor"
//           fill="transparent"
//           r={45}
//           cx="50"
//           cy="50"
//         />
//       </svg>
//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         <CircularProgress progress={percentage} size={80} strokeWidth={10} />
//         <span className="text-sm font-medium text-slate-500 tracking-wider">
//           Saved
//         </span>
//       </div>
//     </div>
//   );
// };
