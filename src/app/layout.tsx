import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Skaleway",
    template: "%s | Skaleway",
  },
  description: "Skaling the way to the future",
  openGraph: {
    title: "Skaleway",
    description: "Skaling the way to the future",
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

// const calSans = LocalFont({
//   src: "../public/fonts/CalSans-SemiBold.ttf",
//   variable: "--font-calsans",
// });
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
