type PageType =
  | "pdf"
  | "image"
  | "video"
  | "word_pdf"
  | "pdf_word"
  | "ppt_pdf"
  | "pdf_ppt"
  | "ppt_word"
  | "word_ppt"
  | "excel_pdf"
  | "pdf_excel"
  | "image_pdf"
  | "pdf_image"
  | "tour"
  | "unknown";
export interface PageTool {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  pageType: PageType;
}

export const pagesData: PageTool[] = [
  // Compress
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
  // Convert
  {
    slug: "convert-word-to-pdf",
    title:
      "Word to PDF Converter: Convert Word to PDF  Online for Free | EZFiles",
    metaDescription:
      "Easily convert your document Word doc and docx to PDF file. Make them as natural as original PDF version. AI-Based. Online Access.",
    keywords: [
      "word to pdf online",
      "word to pdf converter",
      "change word to pdf",
      "convert word to pdf",
      "transform word to pdf",
    ],
    pageType: "word_pdf",
  },
  {
    slug: "convert-pdf-to-word",
    title:
      "PDF to Word Converter: Convert PDF to Word Online for Free | EZFiles",
    metaDescription:
      "Easily convert your pdf documents to Word doc and docx file. Make them as natural as original word version. AI-Based. Online Access.",
    keywords: [
      "pdf to word online",
      "pdf to word converter",
      "change pdf to word",
      "convert pdf to word",
      "transform pdf to word",
    ],
    pageType: "pdf_word",
  },
  {
    slug: "convert-ppt-to-pdf",
    title: "PPT to PDF Converter: Convert Powerpoint to PDF Online| EZFiles",
    metaDescription:
      "Easily convert your Powerpoint PPT and PPTX to PDF file. Make them as natural as original PDF version. AI-Based. Online Access.",
    keywords: [
      "ppt to word online",
      "ppt to word converter",
      "change ppt to pdf",
      "convert ppt to pdf",
      "transform ppt to pdf",
    ],
    pageType: "ppt_pdf",
  },
  {
    slug: "convert-pdf-to-ppt",
    title:
      "PDF to PPT Converter: Convert PDF to PPT Powerpoint Online| EZFiles",
    metaDescription:
      "Easily convert your pdf documents to Powerpoint PPT and PPTX. Make them as natural as original Powerpoint version. AI-Based. Online Access.",
    keywords: [
      "pdf to ppt online",
      "pdf to ppt converter",
      "change pdf to ppt",
      "convert pdf to ppt",
      "transform pdf to ppt",
    ],
    pageType: "pdf_ppt",
  },
  {
    slug: "convert-ppt-to-word",
    title: "PPT to Word Converter: Convert PPT to Word Online | EZFiles",
    metaDescription:
      "Easily convert PowerPoint to Word format online. It works on any browser with no installation needed.",
    keywords: [
      "ppt to word online",
      "ppt to word converter",
      "change ppt to word",
      "convert ppt to word",
      "transform ppt to word",
    ],
    pageType: "ppt_word",
  },
  {
    slug: "convert-word-to-ppt",
    title: "PPT to Word Converter: Convert PPT to Word Online | EZFiles",
    metaDescription:
      "Easily convert Word to PowerPoint format online. It works on any browser with no installation needed.",
    keywords: [
      "word to ppt online",
      "word to ppt converter",
      "change word to ppt",
      "convert word to ppt",
      "transform word to ppt",
    ],
    pageType: "word_ppt",
  },
  {
    slug: "convert-excel-to-pdf",
    title: "Excel to PDF Converter: Convert Spreasheet Table to PDF Online",
    metaDescription:
      "Easily Convert your Spreadsheet Excel xlx  to PDF file. Make them as natural as original PDF version. AI-Based. Online Access.",
    keywords: [
      "excel to pdf online",
      "excel to pdf converter",
      "change excel to pdf",
      "convert excel to pdf",
      "transform excel to pdf",
    ],
    pageType: "excel_pdf",
  },
  {
    slug: "convert-pdf-to-excel",
    title:
      "PDF to Excel Converter: Convert PDF to Excel Spreadsheet Online | EZFiles",
    metaDescription:
      "Easily Convert your pdf documents to Spreadsheet Excel xlx. Make them as natural as original Excel version. AI-Based. Online Access.",
    keywords: [
      "pdf to excel online",
      "pdf to excel converter",
      "change pdf to excel",
      "convert pdf to excel",
      "transform pdf to excel",
    ],
    pageType: "pdf_excel",
  },
  {
    slug: "convert-image-to-pdf",
    title: "Image to PDF Converter: Convert PNG, JPG into PDF Online | EZFiles",
    metaDescription:
      "Easily Convert your Image JPG PNG or other formats  to PDF file. Make them as natural as original PDF version. AI-Based. Online Access.",
    keywords: [
      "png to pdf online",
      "jpg to pdf online",
      "jpeg to pdf online",
      "image to pdf converter",
      "change png to pdf",
      "change jpg to pdf",
      "change jpeg to pdf",
      "convert png to pdf",
      "convert jpg to pdf",
      "convert jpeg to pdf",
    ],
    pageType: "image_pdf",
  },
  {
    slug: "convert-pdf-to-image",
    title: "PDF to Image Converter: Convert PDF into PNG, JPG Online | EZFiles",
    metaDescription:
      " Easily Convert your pdf documents to Image PNG JPG or other formats. Make them as natural as original Image version. AI-Based. Online Access.",
    keywords: [
      "pdf to png online",
      "pdf to jpg online",
      "pdf to jpeg online",
      "pdf to image converter",
      "change pdf to jpg",
      "change pdf to jpeg",
      "change pdf to png",
      "convert pdf to jpg",
      "convert pdf to jpeg",
      "convert pdf to png",
    ],
    pageType: "pdf_image",
  },
  // Tour
  {
    slug: "tour-guide",
    title: "Virtual Tour Guide: Explore Places with AI-Powered Guide | EZFiles",
    metaDescription:
      "Experience immersive virtual tours with AI-powered guide. Explore places, landmarks and destinations from anywhere in the world",
    keywords: [
      "virtual tour guide",
      "AI tour guide",
      "virtual travel",
      "virtual exploration",
      "interactive tours",
    ],
    pageType: "tour",
  },
];

export const getPageBySlug = (slug: string): PageTool | undefined => {
  return pagesData.find((tool) => tool.slug === slug);
};
