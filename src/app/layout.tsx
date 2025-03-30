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
    }
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