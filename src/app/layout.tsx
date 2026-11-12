import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google"
import Header from "@/components/header";
import PageTransition from "@/components/PageTransition";
import StairTransitions from "@/components/StairTransitions";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});


export const metadata: Metadata = {
  title: {
    default: "Meekness Kaboti | Full-Stack AI Engineer",
    template: "%s | Meekness Kaboti",
  },
  description:
    "Full-Stack AI Engineer building and shipping AI-powered web and mobile applications with Next.js, React Native, Node.js and applied AI/ML.",
  keywords: [
    "Meekness Kaboti", "Full-Stack Engineer", "AI Engineer", "Next.js", "React Native",
    "Mobile App Developer", "Zimbabwe", "Software Developer",
  ],
  authors: [{ name: "Meekness Kaboti" }],
  openGraph: {
    title: "Meekness Kaboti | Full-Stack AI Engineer",
    description:
      "AI-powered web and mobile applications, built end-to-end and shipped to production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransitions />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
