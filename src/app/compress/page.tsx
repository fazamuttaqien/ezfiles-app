"use client";

import CompressLayout from "@/components/layout/compress";
import { cn } from "@/lib/utils";
import React from "react";

const CompressPage = () => {
  return (
    <CompressLayout>
      <div
        className={cn(
          "flex flex-auto items-center justify-center gap-4 py-4 rounded-xl border-2 border-dashed border-slate-200"
        )}
      ></div>
    </CompressLayout>
  );
};

export default CompressPage;
