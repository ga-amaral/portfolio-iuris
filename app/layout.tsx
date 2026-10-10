import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iuris Mídia — Performance & Automação",
  description:
    "Estratégia de tráfego pago, landing pages, CRM e automação para transformar leads em clientes e criar um crescimento mais previsível.",
  openGraph: {
    title: "Iuris Mídia — Performance & Automação",
    description:
      "Uma estrutura completa para captar, organizar e converter leads em clientes.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <div id="conteudo" className="contents">
          {children}
        </div>
      </body>
    </html>
  );
}
