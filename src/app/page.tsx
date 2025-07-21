/* eslint-disable @next/next/no-img-element */
"use client";

import FaqSection from "@/components/faq-section";
import FeatureGrid from "@/components/feature-grid";
import { Card, CardContent } from "@/components/ui/card";
import { WA_MESSAGE, WA_PHONE } from "@/constants";
import {
  privacyAndSecurityData,
  threeSimpleSteps,
  addFromIndonesiaSections,
} from "@/data";
import { generateWaMeLink } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/hero-background.png'), linear-gradient(to bottom right, #60a5fa, #3b82f6, #2563eb)",
          }}
        />

        <div
          className="absolute inset-0 block md:hidden bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/hero-background-moble.png'), linear-gradient(to bottom right, #60a5fa, #3b82f6, #2563eb)",
          }}
        />
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-[1] text-center text-white px-4 pt-10 pb-6">
          <div className="flex flex-col items-center">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold tracking-tight">
                Every Tool You Need
                <br />
                To Process Files In <br className="md:hidden" />
                <span className="text-blue-900">One Place</span>
              </h1>

              <p className="max-w-2xl text-base md:text-md lg:text-lg text-white">
                Advanced AI technology to compress and{" "}
                <br className="md:hidden" /> optimize images, videos, audio,
                <br className="md:hidden" /> PDFs, and more.
                <br className="hidden md:block" /> Completely free with no
                limitations.
              </p>
            </div>

            <div className="w-full mt-20 md:mt-0">
              <img
                src="/assets/illustration.png"
                alt="Illustration of file processing tools"
                className="w-full h-auto sm:max-w-xs md:max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="min-h-screen py-16 px-4 md:p-[128px]">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-16">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Everything You need for file management
            </h2>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
              From compression to ai analysis, we provide complete tools <br />
              for all your file needs
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center justify-center p-3 rounded-xl bg-rose-50">
                <Image
                  src="/assets/icons/icon-image-red.svg"
                  alt="Image Red Icon"
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex items-center justify-center p-3 rounded-xl bg-emerald-50">
                <Image
                  src="/assets/icons/icon-video-green.svg"
                  alt="Video Green Icon"
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex items-center justify-center p-3 rounded-xl bg-purple-50">
                <Image
                  src="/assets/icons/icon-pdf-purple.svg"
                  alt="Pdf Purple Icon"
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex items-center justify-center p-3 rounded-xl bg-yellow-50">
                <Image
                  src="/assets/icons/icon-document-yellow.svg"
                  alt="Document Yellow Icon"
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex items-center justify-center p-3 rounded-xl bg-cyan-50">
                <Image
                  src="/assets/icons/icon-audio-cyan.svg"
                  alt="Audio Cyan Icon"
                  width={22}
                  height={22}
                />
              </div>
            </div>
          </div>
          <FeatureGrid />
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className=" max-w-7xl mx-auto min-h-screen py-6 px-4 md:p-16">
        <div
          className="flex flex-col gap-4 md:gap-8 p-6 md:p-16 rounded-[32px]"
          style={{
            background:
              "linear-gradient(287deg, #4AC4F6 -19.83%, #2989D0 103.6%)",
          }}
        >
          <div>
            <h2 className="text-3xl font-bold text-white md:text-5xl mb-2">
              3 Simple Steps
            </h2>
            <p className="text-base font-normal text-white md:text-2xl">
              From compression to ai analusis, we provide complete tools for all
              your file needs
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {threeSimpleSteps.map((data) => (
                <Card
                  key={data.number}
                  className="relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <CardContent className="p-8 text-center">
                    {/* Icon/Illustration Area */}
                    <div className="mb-8 mt-4 relative">
                      {/* Main Icon Container */}
                      <div className="w-full h-32 mx-auto flex items-center justify-center relative overflow-hidden">
                        <Image
                          src={data.imageSrc || "/placeholder.svg"}
                          alt={data.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {data.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {data.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add from Indonesia Section */}
      <section className="min-h-screen bg-white py-8 px-4 md:px-8 lg:p-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Kiri: Phone Mockup */}
            <div className="bg-slate-100 rounded-[30px] overflow-hidden flex items-end justify-center pt-8 px-4 sm:px-8">
              <img
                alt="Phone Mockup"
                src="/assets/hero-phone.png"
                className="h-auto w-[280px] md:w-[320px] lg:w-[380px]"
              />
            </div>

            {/* Kanan: Konten Teks */}
            <div className="flex flex-col items-start p-8 bg-slate-100 rounded-[30px] overflow-hidden">
              <div className="w-full space-y-6">
                <img
                  alt="Indonesian flag"
                  src="/assets/flag.png"
                  className="w-[150px] md:w-[180px] h-auto"
                />
                {addFromIndonesiaSections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-center gap-2 w-full"
                  >
                    <h2 className="font-bold text-2xl md:text-3xl tracking-tight">
                      <span className="text-neutral-800">
                        {section.title.regular}
                      </span>
                      <span className="text-sky-500">
                        {section.title.highlighted}
                      </span>
                    </h2>
                    <p className="font-normal text-neutral-600 text-sm md:text-base leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Security Section */}
      <section className="py-8 px-6 flex flex-col gap-6 md:gap-16 md:py-20 md:px-28 bg-sky-100">
        <div>
          <h2 className="text-4xl font-bold text-center md:text-[2.5rem] text-sky-600 mb-2">
            Privacy and Security are Top Priorities
          </h2>
          <p className="text-xl font-normal text-[#525252] text-center md:text-2xl">
            Your files are secure with enterprise-level-encryption
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          {privacyAndSecurityData.map((p) => (
            <div key={p.title} className="flex flex-col gap-6 p-6">
              <div className="w-32 h-32 mx-auto flex items-center justify-center relative overflow-hidden">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#262626] text-center">
                  {p.title}
                </h3>
                <p className="text-lg font-normal text-[#525252] text-center">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-8 md:p-32">
        <div
          className="relative flex justify-between h-[546px] md:h-auto p-6 rounded-3xl md:p-[3.75rem]"
          style={{
            background: "url('/assets/images/bg-section.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full flex flex-col justify-between md:flex-row md:items-center relative">
            <div>
              <h2 className="text-[30px] leading-9 tracking-tight md:leading-10  md:text-[40px] text-white font-bold mb-2 capitalize ">
                Ready to optimize your <br className="hidden md:flex" /> file
                management?
              </h2>
              <p className="text-lg leading-[21px] md:text-2xl font-normal text-[#F8FAFC]">
                Join 50,000+ users who have experience <br /> the convenience of
                ezfiles.ai
              </p>
            </div>
            <a
              href={generateWaMeLink(WA_PHONE ?? "", WA_MESSAGE ?? "")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition lg:mt-[70px]"
            >
              <Mail size={18} />
              <span className="mt-1 font-semibold">Contact Sales</span>
            </a>
          </div>
          <div
            className="absolute top-56 sm:top-20 md:-top-32 right-4 md:right-20 w-56 h-60"
            style={{
              backgroundImage: "url('/assets/illustration-cta-section.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}
