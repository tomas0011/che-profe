import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Che Profe | Clases Particulares y Mentorías en Zona Oeste",
  description:
    "Clases particulares y mentorías para primario, secundario y universitario. ING. Metalúrgica, Eléctrica, Informática y más. Modalidad presencial Zona Oeste o virtual.",
  keywords: [
    "clases particulares zona oeste",
    "apoyo escolar buenos aires",
    "clases universitarias argentina",
    "clases de matemática",
    "clases de física",
    "mentorías estudiantiles",
    "clases particulares virtuales",
    "preparación exámenes",
    "UNAHUR",
    "profesores particulares",
  ],
  authors: [{ name: "Che Profe" }],
  openGraph: {
    title: "Che Profe | Clases Particulares y Mentorías",
    description:
      "Clases particulares y mentorías para primario, secundario y universitario. ¡Aprobá sin vueltas!",
    url: "https://cheprofe.com.ar",
    siteName: "Che Profe",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Che Profe | Clases Particulares y Mentorías",
    description:
      "Clases particulares y mentorías. ¡Aprobá sin vueltas!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}