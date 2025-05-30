import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import PrelineScriptWrapper from "@/providers/Preline/PrelineWrapper";
import { ApolloProvider } from "@/providers/ApolloProvider/ApolloProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Product Hunt",
  description: "Created by Elvis Serafim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
