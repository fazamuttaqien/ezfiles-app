"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import React, { useRef, useState } from "react";

interface VideoUploadProps {
  maxSize?: number;
  acceptedFormats?: string[];
}

const VideoUpload: React.FC<VideoUploadProps> = ({
  maxSize = 50,
  acceptedFormats = ["video/mp4", "video/webm", "video/ogg"],
}) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset previous error
    setError(null);

    // Validate file type
    if (!acceptedFormats.includes(file.type)) {
      setError(
        `Please select a valid video format (${acceptedFormats.join(", ")})`
      );
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Create video URL and set file
    const url = URL.createObjectURL(file);
    setVideoFile(file);
    setVideoUrl(url);
  };

  const handleRemoveVideo = () => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }
    setVideoFile(null);
    setVideoUrl(null);
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
    <div className="w-full max-w-4xl mx-auto p-4">
      {!videoUrl ? (
        <Card className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
          <div className="p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Upload Video
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Select a video file to upload (max {maxSize}MB)
            </p>
            <Button onClick={handleUploadClick} className="mb-4">
              Choose Video File
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptedFormats.join(",")}
              onChange={handleFileSelect}
              className="hidden"
            />
            <p className="text-xs text-gray-400">
              Supported formats: {acceptedFormats.join(", ")}
            </p>
          </div>
        </Card>
      ) : (
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              src={videoUrl}
              controls
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: "16/9" }}
            >
              Your browser does not support the video tag.
            </video>

            {/* Close button */}
            <Button
              onClick={handleRemoveVideo}
              size="sm"
              variant="destructive"
              className="absolute top-3 right-3 rounded-full w-8 h-8 p-0 shadow-lg"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Video info */}
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>File:</strong> {videoFile?.name}
            </p>
            <p>
              <strong>Size:</strong>{" "}
              {((videoFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB
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

export default VideoUpload;
