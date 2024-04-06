import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/ui/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trinity Sazo",
  description: "A custom portfolio website made by yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900`}>
        {/* <Container> Container will constrain the width to the desired margin*/}
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        {/* </Container> */}
      </body>
    </html>
  );
}
