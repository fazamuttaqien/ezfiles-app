"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import LanguageSelector from "../language-selector";
import { AnimatePresence, motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import {
  FileSpreadsheet,
  FileText,
  ImageIcon,
  Presentation,
  Type,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    category: "File Compression",
    items: [
      { name: "PDF Compression", icon: FileText },
      { name: "Video Compression", icon: Video },
      { name: "Image Compression", icon: ImageIcon },
    ],
  },
  {
    category: "File Conversion From PDF",
    items: [
      { name: "PDF To Word", icon: FileText },
      { name: "PDF To Excel", icon: FileSpreadsheet },
      { name: "PDF To PPT", icon: Presentation },
      { name: "PDF To Image", icon: ImageIcon },
      { name: "PDF To TXT", icon: Type },
    ],
  },
  {
    category: "File Conversion To PDF",
    items: [
      { name: "Word To PDF", icon: FileText },
      { name: "Image To PDF", icon: ImageIcon },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <header
        ref={headerRef}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // On mobile, always apply these styles
          // On desktop, apply styles only when scrolled
          isScrolled
            ? "bg-blue-600/20 backdrop-blur-md shadow-lg border-b border-blue-400/30"
            : "bg-transparent md:backdrop-blur-none md:shadow-none md:border-b-0"
        )}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/assets/logo-ezfiles.png"
                alt="EzFiles Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden md:flex items-center space-x-8">
              <NavigationMenuList className="flex items-center gap-6">
                {/* Pricing */}
                <NavigationMenuItem>
                  <Link href="/#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "text-lg hover:text-black transition-colors bg-transparent p-0 m-0 border-0 shadow-none outline-none font-medium",
                        isScrolled ? "text-blue-900" : "text-white"
                      )}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Feature */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-lg transition-colors bg-transparent font-medium hover:bg-white/25 focus:text-blue-500 data-[state=open]:bg-white/25 data-[state=open]:hover:bg-white/25 data-[state=open]:focus:bg-white/25",
                      isScrolled ? "text-blue-900" : "text-white"
                    )}
                  >
                    Feature
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[700px] lg:w-[900px] p-6">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold">All Features</h3>
                      </div>

                      {/* Categories */}
                      <div className="space-y-8">
                        {features.map((category) => (
                          <div key={category.category} className="space-y-3">
                            {/* Category heading */}
                            <h4 className="font-medium text-lg text-[#262626]">
                              {category.category}
                            </h4>

                            {/* Category items in horizontal grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {category.items.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                  <Link
                                    key={item.name}
                                    href="#"
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                      <IconComponent className="w-5 h-5 text-sky-500" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                      {item.name}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* For Enterprise */}
                <NavigationMenuItem>
                  <Link href="/#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "text-lg hover:text-black transition-colors bg-transparent p-0 m-0 border-0 shadow-none outline-none font-medium",
                        isScrolled ? "text-blue-900" : "text-white"
                      )}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      For Enterprise
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Help */}
                <NavigationMenuItem>
                  <Link href="/#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "text-lg hover:text-black transition-colors bg-transparent p-0 m-0 border-0 shadow-none outline-none font-medium",
                        isScrolled ? "text-blue-900" : "text-white"
                      )}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Help
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Open menu"
              >
                <Image
                  src={`/assets/hamburger-menu.svg`}
                  alt="Open menu"
                  width="40"
                  height="40"
                />
              </button>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Register Button */}
              {/* <Button
                variant="secondary"
                className="bg-[#F1F5F9] text-sm text-gray-900 hover:bg-gray-100 py-2 px-4"
              >
                Register
              </Button> */}

              {/* Login Button */}
              {/* <Button className="bg-sky-600 text-sm hover:bg-sky-700 text-white py-2 px-4">
                Login
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (full screen) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }} // Mulai dari luar layar kanan
            animate={{ x: 0, opacity: 1 }} // Masuk ke tengah
            exit={{ x: "100%", opacity: 0 }} // Keluar lagi ke kanan
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-white w-full h-full flex flex-col"
            style={{ top: headerHeight - 7 }}
          >
            <div className="flex-1 flex flex-col p-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  Menu
                </span>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-900 focus:outline-none"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 6L6 18M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Feature
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <LanguageSelector />
              {/* <div className="w-full flex items-center gap-3">
                <Button
                  variant="secondary"
                  className="bg-[#F1F5F9] text-sm text-gray-900 hover:bg-gray-100 py-2 px-4 flex-1"
                >
                  Register
                </Button>
                <Button className="bg-sky-600 text-sm hover:bg-sky-700 text-white py-2 px-4 flex-1">
                  Login
                </Button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
