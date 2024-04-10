import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/ui/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trinity Sazo | Personal Portfolio",
  description: "Trinity is a software engineer, freelance digital marketer, and aspiring product manager.",
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
