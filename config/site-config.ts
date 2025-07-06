export type IconType =
  | "Shield"
  | "Lock"
  | "Server"
  | "Award"
  | "Code"
  | "Database"
  | "Globe"
  | "Smartphone"
  | "Brain"
  | "Zap"
  | "Terminal"
  | "Network"
  | "Bug"
  | "Key"
  | "Eye"
  | "Cpu"
  | "HardDrive"
  | "Wifi"
  | "Monitor"
  | "ShieldUser"
  | "FileCheck"

export interface Certificate {
  title: string
  organization: string
  date: string
  description: string
  link: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export interface SocialPlatform {
  name: string
  url: string
  icon: string
}

export interface FooterConfig {
  tagline: string
}

export const siteConfig = {
  name: "Sujan",
  title: "Sujan's Portfolio",
  description: "Professional portfolio of Sujan, an aspiring Cybersecurity Analyst",
  
  // Display Settings
  display: {
    showProfileImage: false, // Toggle to show/hide the profile image
  },

  // Animation Settings
  animation: {
    fadeInDuration: 150, // Duration in milliseconds for fade-in animations
  },

  // Theme Settings
  theme: {
    background: "#020817", // Dark background color for all sections
  },

  // Images
  profileImage: "/images/profile.jpeg", // Your personal photo
  siteLogo: "/images/site-logo.png",   // Original logo
  favicon: "/favicon.png",             // Optimized favicon

  // Navigation
  navigation: [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Certifications", href: "/#certifications", id: "certifications" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ],

  // Hero Section
  hero: {
    title: "Hi, I'm",
    name: "Sujan",
  },

  // Contact Information & Social Media (shared between contact section and footer)
  contact: {
    info: {
      email: "sujanedwin2006@gmail.com",
      location: "Bangalore, India",
    } as ContactInfo,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sujanedwinp",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sujan-edwin-penubala-1981bb313/",
        icon: "Linkedin",
      },
      {
        name: "Email",
        url: "mailto:sujanedwin2006@gmail.com",
        icon: "Mail",
      },
    ] as SocialPlatform[],
  },

  // Footer Configuration
  footer: {
    tagline: "",
  } as FooterConfig,

  // Education Timeline
  education: [
    {
      id: "edu1",
      period: "2010-2024",
      institution: "Bishop Cotton Boys' School",
      degree: "High School",
      location: "Bangalore, India",
      description: "Foundation in Computer Programming and critical thinking skills"
    },
    {
      id: "edu2",
      period: "2024-2027",
      institution: "St Joseph's University",
      degree: "Bachelor in Computer Applications",
      location: "Bangalore, India",
      description: "Focus on Computer Science fundamentals and Cybersecurity"
    },
  ],

  // Projects
  projects: [
    {
      title: "Basic Password Manager",
      description: "This Password manager is a very basic one built using Tkinter",
      icon: "ShieldUser" as IconType,
      tags: ["Python", "256-Hash", "Encryption", "Decryption"],
      githubUrl: "https://github.com/sujanedwinp/Password-Manager-Basic",
      githubText: "Code",
      demoUrl: "https://github.com/sujanedwinp/Password-Manager-Basic",
      demoText: "Demo",
      demoAvailable: false,
    },
    {
      title: "Botium Toys: Internal Security Audit",
      description: "This is a sample security audit report for Botium Toys, a company that sells toys and other products. The report is a sample and is not real.",
      icon: "FileCheck" as IconType,
      tags: ["Controls Assessment", "Security", "Audit", "Risk Assessment", "Compliance"],
      githubUrl: "https://github.com/sujanedwinpl/Botium-Internal-Security-Audit",
      githubText: "More Info",
      pdfUrl: "https://drive.google.com/file/d/1LWRq9ZL8_mP16nGDPDbCMs6gLMu-wKbw/view?usp=drive_link",
      pdfText: "Audit",
      pdfAvailable: true,
    }
  ],

  // Certifications
  certifications: [
    {
      title: "The Joy of Computing using Python",
      organization: "NPTEL",
      date: "Jan-Apr 2025",
      description: "12-week course on Python programming from Beginner to Advanced.",
      link: "https://drive.google.com/file/d/1qt3b3qgT76cQUXvNO2KbttrOoMlr7okU/view?usp=drive_link",
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      organization: "Coursera | Google",
      date: "Ongoing",
      description:
        "Comprehensive certification covering Cybersecurity laws, ethic, procedures along with tools to use and how to use.",
      link: "#",
    },
  ],
}

export function getIconComponent(iconName: IconType) {
  switch (iconName) {
    case "Shield":
      return Shield
    case "Lock":
      return Lock
    case "Server":
      return Server
    case "Award":
      return Award
    case "Code":
      return Code
    case "Database":
      return Database
    case "Globe":
      return Globe
    case "Smartphone":
      return Smartphone
    case "Brain":
      return Brain
    case "Zap":
      return Zap
    case "Terminal":
      return Terminal
    case "Network":
      return Network
    case "Bug":
      return Bug
    case "Key":
      return Key
    case "Eye":
      return Eye
    case "Cpu":
      return Cpu
    case "HardDrive":
      return HardDrive
    case "Wifi":
      return Wifi
    case "Monitor":
      return Monitor
    case "FileCheck":
      return FileCheck
    default:
      return Shield
  }
}

export function getSocialIconComponent(iconName: string) {
  switch (iconName) {
    case "Github":
      return Github
    case "Linkedin":
      return Linkedin
    case "Twitter":
      return Twitter
    case "Code":
      return Code
    case "Mail":
      return Mail
    default:
      return Mail
  }
}

// Import these at the top of the file
import {
  Shield,
  Lock,
  Server,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Zap,
  Terminal,
  Network,
  Bug,
  Key,
  Eye,
  Cpu,
  HardDrive,
  Wifi,
  Monitor,
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileCheck,
} from "lucide-react"
