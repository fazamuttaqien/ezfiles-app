import { notFound } from "next/navigation";
import { getPageBySlug, pagesData } from "@/lib/data";
import type { Metadata } from "next";
import CompressLayout from "@/components/layout/compress";
import CompressUploader from "@/components/compress-uploader";
import TourGuideComponent from "@/components/tour-guide";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return pagesData.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = getPageBySlug(params.slug);
  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords.join(", "),
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params;

  const page = getPageBySlug(slug);
  if (!page) {
    notFound();
  }

  return (
    <CompressLayout pageType={page.pageType}>
      {page.pageType === "tour" ? (
        <TourGuideComponent />
      ) : (
        <CompressUploader pageType={page.pageType} />
      )}{" "}
    </CompressLayout>
  );
}
