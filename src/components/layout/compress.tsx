import { ReactNode } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
}

const CompressLayout = ({ children }: Props) => {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden p-4",
        "bg-cover bg-bottom bg-no-repeat",
        "bg-[url('/assets/images/compress-mobile.png')]",
        "md:bg-[url('/assets/images/compress.png')]"
      )}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #60a5fa, #3b82f6, #2563eb)",
        }}
      />

      <Card className="w-full max-w-3xl h-[450px] shadow-lg rounded-xl border border-neutral-100 flex flex-col mt-[44px]">
        <CardContent className="p-4 sm:p-6 flex flex-col gap-4 flex-1">
          <div className="flex flex-row items-center justify-between gap-4">
            <div>
              <h1 className="font-semibold text-neutral-800 text-xl sm:text-2xl leading-6">
                PDF Compression
              </h1>
              <p className="text-neutral-600 text-sm mt-1">
                Maximum file size 100MB
              </p>
            </div>
            <div className="flex w-[55px] h-[55px] justify-center items-center bg-blue-50 rounded-lg flex-shrink-0">
              <Image
                src="/assets/images/compress-button.png"
                alt="compress_button"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
          {children}
        </CardContent>
      </Card>

      <div className="relative mt-8 md:absolute md:bottom-8 md:right-2 lg:right-4 md:mt-0 z-10 transform transition-transform hover:scale-105 flex">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/compress-frame.png"
            alt="compress_frame"
            width={128}
            height={128}
            className="h-28 sm:h-32 w-auto object-contain -mb-4"
            priority
          />
          <Image
            src="/assets/images/compress-genie.png"
            alt="compress_genie"
            width={288}
            height={288}
            className="h-64 sm:h-72 w-auto -rotate-3 object-contain transform hover:-rotate-1 transition-transform"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CompressLayout;
