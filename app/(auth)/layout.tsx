import { GlassPane } from "@/components/GlassPane";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

const AuthRootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <html lang="en" className={inter.variable}>
    <head />
    <body className="h-screen w-screen rainbow-mesh p-6">
      <GlassPane className="w-full h-full flex items-center justify-center">
        {children}
      </GlassPane>
    </body>
  </html>
);

export default AuthRootLayout;
