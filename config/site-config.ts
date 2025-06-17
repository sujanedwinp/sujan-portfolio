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
  title: "Cybersecurity Analyst Portfolio",
  description: "Professional portfolio of Sujan, an aspiring Cybersecurity Analyst",

  // Main image
  mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FZH4LVmz9Gxa0334IJqEv3qhBXwaSn.png",

  // Navigation
  navigation: [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Certifications", href: "/#certifications", id: "certifications" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ],

  // Hero Section
  hero: {
    title: "Hi, I'm",
    name: "Sujan",
    subtitle: "Aspiring to be a",
    profession: "Cybersecurity Analyst",
    learningPrefix: "Learning:",
    skills: ["Python", "Java", "C", "Linux", "SQL", "DBMS", "Data Structures"],
    skillRotationSpeed: 3000, // milliseconds
  },

  // Contact Information & Social Media (shared between contact section and footer)
  contact: {
    info: {
      email: "sujanedwin2006@gmail.com",
      phone: "+91 8317334461",
      location: "Bangalore, India",
    } as ContactInfo,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sujan",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sujan",
        icon: "Linkedin",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/sujan",
        icon: "Twitter",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/sujan",
        icon: "Code",
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
      description:
        "Foundation and Reasoning for my intreset in Computer Programming. Provided me enough scope for learning and growing, in terms of knowledge and basic programming skills.",
    },
    {
      id: "edu2",
      period: "2024-Present",
      institution: "St Josheph's University",
      degree: "Bachelor in Computer Applications",
      location: "Bangalore, India",
      description:
        "Here is where I found out about Cyberscurity. Visiting hackathons and obtaining valuable skills and learning advanced data structures helped me in understanding Computer Architecure and Design",
    },
  ],

  // Projects
  projects: [
    {
      title: "Basic Password Manager",
      description: "This Password manager is a very basic one built using Tkinter",
      icon: "ShieldUser" as IconType,
      tags: ["Python", "256-Hash", "Encryption", "Decryption"],
      githubUrl: "https://github.com/whatdaahaael/Password-Manager-Basic",
      demoUrl: "https://github.com/whatdaahaael/Password-Manager-Basic",
    },
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
} from "lucide-react"
