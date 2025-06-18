import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { siteConfig } from "@/config/site-config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to update section background color
export function updateSectionBackground() {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--section-bg', siteConfig.theme.background)
  }
}
