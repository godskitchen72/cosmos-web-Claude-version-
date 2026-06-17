import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cosmos Medical Technologies | Navigate Healthcare With Intelligence',
  description: 'AI-Powered Medical Documentation, No-Fault Workflow Automation, Revenue Cycle Management, and Practice Automation for Personal Injury and No-Fault Clinics.',
  keywords: 'medical practice management, no-fault billing, NF2 NF3 automation, medical billing software, healthcare technology, AI medical documentation',
  openGraph: {
    title: 'Cosmos Medical Technologies',
    description: 'One Platform. Complete Control. Navigate Healthcare With Intelligence.',
    type: 'website',
    siteName: 'Cosmos Medical Technologies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#040E20" />
      </head>
      <body>{children}</body>
    </html>
  )
}
