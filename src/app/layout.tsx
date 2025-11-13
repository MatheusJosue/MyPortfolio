import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Xavier Cerqueira - Frontend Developer",
  description:
    "Front-End Developer com 4+ anos de experiência em React, Next.js, Angular e TypeScript. Criando interfaces modernas, responsivas e de alta performance.",
  keywords: [
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Developer",
    "Portfolio",
    "Angular",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://matheusxavier.dev",
    title: "Matheus Xavier Cerqueira - Frontend Developer",
    description: "Front-End Developer | React, Next.js & TypeScript Specialist",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
