import "@/styles/globals.css";
import Footer from "@/components/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Skaleway",
    template: "%s | Skaleway",
  },
  description:
    "Transforming Ideas into Digital Success Stories - Crafting Engaging Websites & Powerful Web Applicationsfor Small Businesses",
  openGraph: {
    title: "Skaleway",
    description:
      "Transforming Ideas into Digital Success Stories - Crafting Engaging Websites & Powerful Web Applicationsfor Small Businesses",
    url: "https://skaleway.com",
    siteName: "skaleway.com",
    images: [
      {
        url: "/https://skaleway.com/placeholder.png",
        width: 2322,
        height: 1306,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Skaleway",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "./icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Toaster />
      <body className="font-inter">
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
