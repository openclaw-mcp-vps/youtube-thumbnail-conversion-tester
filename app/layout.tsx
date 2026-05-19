import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailAB – A/B Test YouTube Thumbnails for Higher CTR",
  description: "Automatically test multiple thumbnail variations for your YouTube videos and track CTR performance to identify winning designs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="120a4690-bf89-4103-8906-9777fac244d0"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
