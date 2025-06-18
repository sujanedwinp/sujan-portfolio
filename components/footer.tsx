"use client"

import Link from "next/link"
import { siteConfig, getSocialIconComponent } from "@/config/site-config"

export function Footer() {
  return (
    <footer className="border-t bg-[#020817] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-xl font-semibold text-gray-200">
              Sujan Edwin Penubala
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sujan. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {siteConfig.contact.social.map((platform, index) => {
              const IconComponent = getSocialIconComponent(platform.icon)
              return (
                <Link
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="sr-only">{platform.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
