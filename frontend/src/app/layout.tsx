import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07332A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "EDUCTIVE — Coordinated School Management for Modern Nigerian Schools",
  description:
    "EDUCTIVE synchronizes school administration, academic management, attendance registers, and bursar fee recordkeeping into one clear, reliable operating platform.",
  keywords: [
    "school management software",
    "Nigerian school platform",
    "school administration software",
    "bursar fee tracking",
    "student report cards Nigeria",
    "school portal Nigeria",
    "Oakland School",
    "Eductive",
  ],
  authors: [{ name: "EDUCTIVE Technologies" }],
  openGraph: {
    title: "EDUCTIVE — Coordinated School Management for Modern Nigerian Schools",
    description:
      "One coordinated operating platform for school leadership, academic registers, bursar reconciliations, and continuous assessment.",
    url: "https://eductive.ng",
    siteName: "EDUCTIVE",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUCTIVE — Coordinated School Management for Modern Nigerian Schools",
    description:
      "One coordinated operating platform for school leadership, academic registers, bursar reconciliations, and continuous assessment.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolageGrotesque.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-charcoal-900 selection:bg-emerald-300 selection:text-ink-900"
      >
        {children}
      </body>
    </html>
  );
}
