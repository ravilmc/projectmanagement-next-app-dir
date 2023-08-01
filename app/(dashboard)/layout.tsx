import "@/styles/global.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import { GlassPane } from "@/components/GlassPane";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

const DashboardRootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" className={clsx(inter.variable, "dark")}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          <Sidebar />
          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
