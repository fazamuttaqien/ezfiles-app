import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWaMeLink(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function capitalizeFirstLetter(inputString: string): string {
  if (inputString.length === 0) {
    return "";
  }
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export function titleCase(inputString: string): string {
  return inputString
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}