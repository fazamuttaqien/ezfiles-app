import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { URL_LINK_AUTO_COMPRESS } from "@/constants";
import { cn } from "@/lib/utils";

import {
  ArrowUpRight,
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "Compress Files",
      description: "Reduce file size up to 90% without quality loss",
      icon: "compress",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconBg: "bg-blue-50",
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-700",
      isComingSoon: false,
      linkUrl: `${URL_LINK_AUTO_COMPRESS}`,
    },
    {
      title: "Format Conversion",
      description: "Convert between file formats easily and quickly",
      icon: "conversion",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconBg: "bg-blue-50",
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-700",
      isComingSoon: false,
      linkUrl: "",
    },
    {
      title: "AI Summarization",
      description: "Summarize documents and extract text with OCR AI",
      icon: "summarization",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconBg: "bg-blue-50",
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-700",
      isComingSoon: true,
      linkUrl: "",
    },
    {
      title: "File Protection",
      description: "Password, watermark, and encryption for security",
      icon: "protection",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconBg: "bg-blue-50",
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-700",
      isComingSoon: true,
      linkUrl: "",
    },
    {
      title: "Automated Workflow",
      description: "Create custom workflows for repetitive processes",
      icon: "workflow",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconBg: "bg-blue-50",
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-700",
      isComingSoon: true,
      linkUrl: "",
    },
    {
      title: "AI Translation",
      description: "Translate documents to 100+ languages",
      icon: "translation",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      iconBg: "bg-blue-50",
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-700",
      isComingSoon: true,
      linkUrl: "",
    },
  ];

  const handleOnClickCard = (url: string) => {
    if (!url) return;
    const params = new URLSearchParams({ ref: "feature-grid" });
    const fullUrl = url.includes("?") ? `${url}&${params}` : `${url}?${params}`;
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            return (
              <Card
                onClick={() => handleOnClickCard(feature.linkUrl)}
                key={index}
                className={cn(
                  `${feature.hoverBgColor} border-slate-200 rounded-[16px]`,
                  !feature.isComingSoon &&
                    "transition-all duration-300 cursor-pointer",
                  "group relative overflow-hidden"
                )}
              >
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    {/* Header with icon and arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${feature.iconBg} p-1 rounded-lg`}>
                        <Image
                          src={`/assets/icons/icon-features-${feature.icon}.svg`}
                          alt={`${feature.title} Icon`}
                          width={50}
                          height={50}
                          unoptimized
                        />
                      </div>
                      {feature.isComingSoon ? (
                        <div className="flex justify-center items-center py-2 px-2 rounded-full bg-sky-50 text-sky-600">
                          <p className="text-base leading-none">Coming Soon</p>
                        </div>
                      ) : (
                        <ArrowUpRight
                          className={`w-5 h-5 ${feature.textColor} opacity-60 group-hover:text-white group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold mb-3 transition-colors duration-300 ${feature.textColor} group-hover:text-white`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                          feature.textColor
                        } ${
                          feature.bgColor === "bg-blue-500"
                            ? "opacity-90"
                            : "opacity-70"
                        } group-hover:text-white group-hover:opacity-90`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
