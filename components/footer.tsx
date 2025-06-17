import Link from "next/link"
import { siteConfig, getSocialIconComponent } from "@/config/site-config"

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-950">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-xl font-bold mb-2">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <div className="flex items-center space-x-4 mb-2">
            {siteConfig.contact.social.map((platform, index) => {
              const IconComponent = getSocialIconComponent(platform.icon)
              return (
                <Link
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={platform.name}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="sr-only">{platform.name}</span>
                </Link>
              )
            })}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{siteConfig.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
