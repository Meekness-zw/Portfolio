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
  title: "Meekness Kaboti",
  description: "Meekness Kaboti Software Developer",
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
