import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center py-8 px-4 md:py-20 md:px-32">
      <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between">
        <div>
          <div className="w-full relative md:w-24 h-16 mb-2">
            <Image
              src="/assets/logo-ezfiles-footer.png"
              alt="EzFiles Logo Footer"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg text-[#737373] font-normal text-center md:text-left">
            AI-powered platform for all your file management needs.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* facebook */}
          <a href="#">
            <div className="flex items-center justify-center p-2 rounded-full bg-sky-50">
              <Image
                src="/assets/icons/icon-facebook-blue.svg"
                alt="Facebook Icon"
                width={18}
                height={18}
              />
            </div>
          </a>
          {/* instagram */}
          <a href="#">
            <div className="flex items-center justify-center p-2 rounded-full bg-sky-50">
              <Image
                src="/assets/icons/icon-instagram-blue.svg"
                alt="Instagram Icon"
                width={18}
                height={18}
              />
            </div>
          </a>
          <a href="#">
            {/* x/twitter */}
            <div className="flex items-center justify-center p-2 rounded-full bg-sky-50">
              <Image
                src="/assets/icons/icon-x.svg"
                alt="X Icon"
                width={18}
                height={18}
              />
            </div>
          </a>
          {/* linkedin */}
          <a href="#">
            <div className="flex items-center justify-center p-2 rounded-full bg-sky-50">
              <Image
                src="/assets/icons/icon-linkedin-blue.svg"
                alt="LinkedIn Icon"
                width={18}
                height={18}
              />
            </div>
          </a>
        </div>
      </div>

      <div className="w-full h-[1px] bg-slate-200 my-6" />

      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {/* Menu List */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-12 text-center md:text-left">
          <a
            href="/#"
            className="text-[#737373] hover:text-black transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/#"
            className="text-[#737373] hover:text-black transition-colors duration-200"
          >
            Support & Sales
          </a>
          <a
            href="/#"
            className="text-[#737373] hover:text-black transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/#"
            className="text-[#737373] hover:text-black transition-colors duration-200"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#737373]">
          Copyright © 2025 ezfiles.ai
        </div>
      </div>
    </div>
  );
};

export default Footer;
