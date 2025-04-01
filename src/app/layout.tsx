import { Metadata } from "next"
import { ReactNode } from "react"
import "../globals.css"

interface RootLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Project Nexus",
    icons: {
        icon: "https://img.icons8.com/fluency/48/customer-insight.png"
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
            url: "/OpenGraph Image.png",
            width: 1200, height: 630,
            alt: "Project Nexus Open-Source Tech Solutions"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Nexus",
        description: "Nexus, or Next-Gen Experiences Using Systems, Is an Open-Source Initiative Focused on Delivering Secure and Scalable Tech Solutions for the Future",
        images: ["/OpenGraph Image.png"]
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
            <body className="w-screen h-screen">{ children }</body>
        </html>
    )
}