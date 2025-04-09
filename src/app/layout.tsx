import { Metadata } from "next"
import { ReactNode } from "react"
import "../globals.css"

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Project Nexus",
  icons: {
    icon: "https://raw.githubusercontent.com/prjctnexus/nexus-website/6fa21e9d80ad8e14b7a656a3658129d3c78749ea/public/FaviconTeal.svg",
    apple: "https://raw.githubusercontent.com/prjctnexus/nexus-website/refs/heads/main/public/AppleTouchIcon.png"
  },
  description: "Nexus, or Next-Gen Experiences Using Systems, Is an Open-Source Initiative Focused on Delivering Secure and Scalable Tech Solutions for the Future",
  keywords: [
    "Nexus", "Open-Source",
    "Next-Gen Experiences Using Systems",
    "Innovation", "Technology",
    "Secure Solutions", "Scalable Solutions",
    "Tech Company", "Software Development",
    "Future Tech", "Digital Transformation",
    "Cutting-Edge Technology", "Cloud Computing",
    "Cybersecurity", "Decentralized Systems",
    "AI and Automation", "Blockchain",
    "IoT", "Software Engineering",
    "Open-Source Software"
  ],
  openGraph: {
    url: "https://projectnxus.web.app/",
    type: "website", title: "Project Nexus",
    description: "Nexus, or Next-Gen Experiences Using Systems, Is an Open-Source Initiative Focused on Delivering Secure and Scalable Tech Solutions for the Future",
    images: [{
      url: "https://raw.githubusercontent.com/prjctnexus/nexus-website/refs/heads/main/public/OpenGraph%20Image.png",
      width: 1200, height: 630,
      alt: "Project Nexus Open-Source Tech Solutions"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Nexus",
    description: "Nexus, or Next-Gen Experiences Using Systems, Is an Open-Source Initiative Focused on Delivering Secure and Scalable Tech Solutions for the Future",
    images: ["https://raw.githubusercontent.com/prjctnexus/nexus-website/refs/heads/main/public/OpenGraph%20Image.png"]
  },
  metadataBase: new URL("https://projectnxus.web.app/"),
  authors: [{
    name: "Nexus Team", url: "https://projectnxus.web.app/"
  }, {
    name: "Gautham Krishna Vinayachandran",
    url: "https://github.com/myselfgautham"
  }
  ]
} satisfies Metadata;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="w-screen h-screen dark:bg-[#121212]">{children}</body>
    </html>
  )
}