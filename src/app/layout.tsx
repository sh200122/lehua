import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import { SVGFilters } from "@/components/SVGFilters";
import { createClient } from "@/prismicio";
import Advertisement from "@/components/Advertisement";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bowlby-sc",
  weight: "400",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: "500",
});

export async function generateMetadata(): Promise<Metadata> {
  const prismic = createClient();
  const settings = await prismic.getSingle("setting");
  return {
    title: settings.data.site_title,
    description: settings.data.meta_descript,
    openGraph: {
      images: settings.data.fallback_og_image.url ?? undefined,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>{children}</main>
        <SVGFilters />
        <Advertisement />
      </body>
    </html>
  );
}
