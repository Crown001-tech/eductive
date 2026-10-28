import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import { SchoolShowcaseStage } from "@/components/school/SchoolShowcaseStage";

export const metadata: Metadata = {
  title: "Oakland School Showcase — Built on EDUCTIVE",
  description:
    "Explore the live website and school portal we built for Oakland Comprehensive High School in Lagos.",
};

export default function SchoolPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#07332A] overflow-x-hidden">
      <NavBar />
      <SchoolShowcaseStage />
      <Footer />
    </main>
  );
}

