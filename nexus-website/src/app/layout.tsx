import { Metadata } from "next"
import { ReactNode } from "react"

interface RootLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Project Nexus"
} satisfies Metadata;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en-US">
            <head>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>{ children }</body>
        </html>
    )
}