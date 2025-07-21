import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "Can i track my files?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. At tincidunt ultricies at nulla amet leo sem. Integer elit elit nunc iaculis. Mauris amet ut sit sed vel commodo. Varius eu neque odio leo augue consequat nulla eget auctor. Sit ut libero diam accumsan lacus phasellus leo risus et. Elementum.",
  },
  {
    id: 2,
    question: "What formats can ezfiles support?",
    answer:
      "Ezfiles supports a wide variety of file formats including documents (PDF, DOC, DOCX), images (JPG, PNG, GIF, SVG), videos (MP4, AVI, MOV), audio files (MP3, WAV, FLAC), and many more. We're constantly adding support for new formats based on user feedback.",
  },
  {
    id: 3,
    question: "Is ezfiles free and are there any limitations?",
    answer:
      "Ezfiles offers both free and premium plans. The free plan includes basic file management features with some storage limitations. Premium plans offer unlimited storage, advanced features, and priority support. Check our pricing page for detailed information about plan limitations and features.",
  },
  {
    id: 4,
    question: "Will my files be deleted?",
    answer:
      "Your files are safe with us. We maintain multiple backups and use enterprise-grade security measures. Files are only deleted if you explicitly delete them or if your account remains inactive for an extended period (which we'll notify you about well in advance).",
  },
  {
    id: 5,
    question: "How is ezfiles different from other platforms?",
    answer:
      "Ezfiles stands out with its intuitive interface, advanced file organization features, robust security measures, and excellent customer support. We focus on providing a seamless user experience while maintaining the highest standards of data protection and file accessibility.",
  },
];

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <section className="relative bg-[url('/assets/images/bg-section-last.png')] bg-[size:250%] md:bg-cover bg-[position:100%_100%] md:bg-[position:80%_100%] bg-no-repeat">
      {/* faq  */}
      <div className="py-10 px-4 md:min-h-min">
        <div className="max-w-5xl mx-auto md:my-24 md:px-24">
          <Card
            className="flex flex-col gap-6 p-4 md:p-10 rounded-[32px] bg-white shadow-[0px_42px_80px_0px_rgba(0,0,0,0.07)]"
            style={{ border: "6px solid #F1F5F9" }}
          >
            <CardContent className="p-2 md:p-6">
              <CardTitle className="text-5xl font-bold text-#262626 text-center">
                FAQ
              </CardTitle>
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <Collapsible
                    key={faq.id}
                    open={openItems.includes(faq.id)}
                    onOpenChange={() => toggleItem(faq.id)}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 group">
                      <h3 className="text-lg md:text-xl font-medium text-gray-900 pr-4 group-hover:text-gray-700">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(faq.id) ? (
                          <Minus className="h-6 w-6 text-gray-600 transition-transform duration-200" />
                        ) : (
                          <Plus className="h-6 w-6 text-gray-600 transition-transform duration-200" />
                        )}
                      </div>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                      <div className="pb-6 pt-2">
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Description with asset */}
      <div className="py-10 px-4 md:px-24 md:py-28 md:min-h-min flex flex-col md:flex-row justify-between w-full">
        <div className="md:basis-8/12 mt-8 mb-64 md:mb-40">
          <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-8 text-[#044383] mb-4">
            <span className="text-white">We Are Here To Help</span> <br />{" "}
            Customize Your Documents<span className="text-white">.</span>
          </h3>
          <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-white leading-7 -tracking-[0.6px]">
            Advanced AI technology to compress and optimize images, videos,
            audio, PDFs, and more. Completely free with no limitations.
          </p>
        </div>

        <div className="md:basis-3/12 relative">
          <Image
            src="/assets/images/image-14.svg"
            alt="Image"
            width={270}
            height={270}
            className="absolute w-48 h-48 md:w-72 md:h-72 bottom-10 md:bottom-16 right-20 md:right-5 lg:right-5 xl:right-14 2xl:right-40 "
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
