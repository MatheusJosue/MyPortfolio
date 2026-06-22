import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Josue Xavier Cerqueira | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack com 4+ anos de experiência em aplicações web, com foco em front-end, Next.js, React, TypeScript, Laravel, .NET e Azure DevOps.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Angular",
    "Laravel",
    ".NET",
    "Azure DevOps",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Matheus Josue Xavier Cerqueira | Desenvolvedor Full Stack",
    description:
      "Full Stack com foco em front-end, 4+ anos de experiência e atuação em produtos financeiros, backoffice e plataformas de investimento.",
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
