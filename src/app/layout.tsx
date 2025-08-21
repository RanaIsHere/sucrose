import type { Metadata } from "next";
import { Inika, Koulen } from "next/font/google";
import "./globals.css";

const inikaRegular = Inika({
  variable: '--font-inika-regular',
  subsets: ['latin'],
  weight: '400'
});

const inikaBold = Inika({
  variable: '--font-inika-bold',
  subsets: ['latin'],
  weight: '700'
})

const koulenRegular = Koulen({
  variable: '--font-koulen-regular',
  subsets: ['latin'],
  weight: '400'
})


export const metadata: Metadata = {
  title: "Sucrose",
  description: "A cafe franchise delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inikaRegular.variable} ${inikaBold.variable} ${koulenRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
