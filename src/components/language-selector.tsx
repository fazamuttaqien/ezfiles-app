"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const languages = [
  {
    code: "id",
    name: "Indonesia",
    flag: (
      <Image
        src={`/assets/flags/id.png`}
        alt="Indonesia Flag"
        width={24}
        height={16}
        className="w-6 h-4 rounded-sm flex items-center justify-center"
        style={{ objectFit: "cover" }}
      />
    ),
  },
  {
    code: "en",
    name: "English",
    flag: (
      <Image
        src={`/assets/flags/en.png`}
        alt="English Flag"
        width={24}
        height={16}
        className="w-6 h-4 rounded-sm flex items-center justify-center"
        style={{ objectFit: "cover" }}
      />
    ),
  },
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("id");

  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <div className="md:w-20 md:h-10 flex items-center justify-center">
      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
        <SelectTrigger className="w-auto border-none bg-transparent hover:bg-gray-900/5 md:hover:bg-white/10 focus:ring-0 focus:ring-offset-0 h-6 md:h-auto p-2 transition-colors">
          <SelectValue asChild>
            <div className="flex items-center space-x-1 mr-1">
              <span className="text-base md:text-lg text-gray-900 md:text-white">
                {currentLanguage?.code.toUpperCase()}
              </span>
              {currentLanguage?.flag}
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex items-center space-x-2">
                {language.flag}
                <span>{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
