/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, FileText } from "lucide-react";

interface PDFUploadProps {
  maxSize?: number;
  height?: string;
}

const PDFUpload: React.FC<PDFUploadProps> = ({
  maxSize = 10,
  height = "600px",
}) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset previous error
    setError(null);

    // Validate file type
    if (file.type !== "application/pdf") {
      setError("Please select a valid PDF file");
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Create PDF URL and set file
    const url = URL.createObjectURL(file);
    setPdfFile(file);
    setPdfUrl(url);
  };

  const handleRemovePDF = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }
    setPdfFile(null);
    setPdfUrl(null);
    setError(null);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {!pdfUrl ? (
        <Card className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
          <div className="p-8 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Upload PDF
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Select a PDF file to upload (max {maxSize}MB)
            </p>
            <Button onClick={handleUploadClick} className="mb-4">
              Choose PDF File
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <p className="text-xs text-gray-400">Supported format: PDF only</p>
          </div>
        </Card>
      ) : (
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            {/* <iframe
              src={`${pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full rounded-2xl border-0"
              style={{
                height: height,
                aspectRatio: "3/4",
              }}
              title="PDF Viewer"
            /> */}
            {/* Close button */}
            <Button
              onClick={handleRemovePDF}
              size="sm"
              variant="destructive"
              className="absolute top-3 right-3 rounded-full w-8 h-8 p-0 shadow-lg z-10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* PDF info */}
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>File:</strong> {pdfFile?.name}
            </p>
            <p>
              <strong>Size:</strong>{" "}
              {((pdfFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default PDFUpload;
