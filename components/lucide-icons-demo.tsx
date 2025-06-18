import {
  Shield,
  Lock,
  Server,
  Code,
  Database,
  Globe,
  Zap,
  Terminal,
  Network,
  Bug,
  Key,
  Eye,
  Github,
  Mail,
  FileDown,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react"

export function LucideIconsDemo() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-bold mb-6">How to Use Lucide Icons</h2>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">1. Basic Icon Usage</h3>
        <div className="flex gap-4 items-center">
          <Shield className="h-6 w-6" />
          <Code className="h-6 w-6 text-blue-500" />
          <Terminal className="h-6 w-6 text-green-500" />
          <Database className="h-6 w-6 text-purple-500" />
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
          {`import { Shield, Code, Terminal, Database } from 'lucide-react'

<Shield className="h-6 w-6" />
<Code className="h-6 w-6 text-blue-500" />
<Terminal className="h-6 w-6 text-green-500" />
<Database className="h-6 w-6 text-purple-500" />`}
        </pre>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">2. Different Sizes</h3>
        <div className="flex gap-4 items-center">
          <Shield className="h-4 w-4" />
          <Shield className="h-6 w-6" />
          <Shield className="h-8 w-8" />
          <Shield className="h-12 w-12" />
          <Shield className="h-16 w-16" />
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
          {`<Shield className="h-4 w-4" />   {/* 16px */}
<Shield className="h-6 w-6" />   {/* 24px */}
<Shield className="h-8 w-8" />   {/* 32px */}
<Shield className="h-12 w-12" /> {/* 48px */}
<Shield className="h-16 w-16" /> {/* 64px */}`}
        </pre>
      </div>

      {/* With Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">3. Icons in Buttons</h3>
        <div className="flex gap-4">
          <button className="btn-solid-blue flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            Download
          </button>
          <button className="btn-outline-blue flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            View Demo
          </button>
          <button className="btn-outline-blue flex items-center gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </button>
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
          {`<button className="btn-solid-blue flex items-center gap-2">
  <FileDown className="h-4 w-4" />
  Download
</button>`}
        </pre>
      </div>

      {/* Cybersecurity Icons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">4. Cybersecurity Icons</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Shield className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-sm">Shield</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Lock className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-sm">Lock</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Key className="h-8 w-8 text-yellow-500 mb-2" />
            <span className="text-sm">Key</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Eye className="h-8 w-8 text-purple-500 mb-2" />
            <span className="text-sm">Eye</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Bug className="h-8 w-8 text-red-500 mb-2" />
            <span className="text-sm">Bug</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Network className="h-8 w-8 text-indigo-500 mb-2" />
            <span className="text-sm">Network</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Server className="h-8 w-8 text-gray-500 mb-2" />
            <span className="text-sm">Server</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Terminal className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm">Terminal</span>
          </div>
        </div>
      </div>

      {/* Animated Icons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">5. Animated Icons</h3>
        <div className="flex gap-4 items-center">
          <Shield className="h-8 w-8 text-blue-500 animate-pulse" />
          <Code className="h-8 w-8 text-green-500 animate-bounce" />
          <Zap className="h-8 w-8 text-yellow-500 animate-ping" />
          <Globe className="h-8 w-8 text-blue-600 animate-spin" />
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
          {`<Shield className="h-8 w-8 text-blue-500 animate-pulse" />
<Code className="h-8 w-8 text-green-500 animate-bounce" />
<Zap className="h-8 w-8 text-yellow-500 animate-ping" />
<Globe className="h-8 w-8 text-blue-600 animate-spin" />`}
        </pre>
      </div>

      {/* Icon with Text */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">6. Icons with Text</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-500" />
            <span>sujanedwin2006@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-green-500" />
            <span>+91 8317334461</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-red-500" />
            <span>Bangalore, India</span>
          </div>
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
          {`<div className="flex items-center gap-2">
  <Mail className="h-5 w-5 text-blue-500" />
  <span>sujanedwin2006@gmail.com</span>
</div>`}
        </pre>
      </div>
    </div>
  )
}
