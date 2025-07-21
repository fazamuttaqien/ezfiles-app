type PageType = "pdf" | "image" | "video" | "unknown";
export interface PageTool {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  pageType: PageType;
}

export const pagesData: PageTool[] = [
  {
    slug: "compress-pdf",
    title: "Compress PDF Online: Reduce PDF File Size for Free | EZFiles",
    metaDescription:
      "Easily compress your PDF File documents easily and efficiently without losing quality. Try EZFiles, an AI-powered tools and free access",
    keywords: [
      "Compress PDF Online",
      "Reduce PDF File Size",
      "Compress image online",
      "compress png online",
      "compress jpeg online",
      "compress jpg online",
      "compress png size",
    ],
    pageType: "pdf",
  },
  {
    slug: "compress-image",
    title:
      "Compress Image Online: Reduce PNG, JPG, & Other Image Size | EZ Files",
    metaDescription:
      "Easily reduce image file sizes (JPG, PNG, and more) online in seconds. No Quality compromise, No Watermark, and ready to use",
    keywords: [
      "compress image online",
      "compress jpeg size",
      "compress jpg size",
      "compress video online",
      "compress mp4",
      "compress avi",
    ],
    pageType: "image",
  },
  {
    slug: "compress-video",
    title: "Compress Video Online: Reduce MP4 & AVI File Size | EZFiles",
    metaDescription:
      "Easily reduce video file sizes (AVI and MP4 ) online in seconds. No Quality compromise, No Watermark, and ready to use",
    keywords: ["compress video online", "reduce mp4 size", "reduce avi size"],
    pageType: "video",
  },
];

export const getPageBySlug = (slug: string): PageTool | undefined => {
  return pagesData.find((tool) => tool.slug === slug);
};
