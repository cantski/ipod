import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chicago = localFont({
  src: "./fonts/chicago/ChicagoFLF.ttf",
  variable: "--font-chicago",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${chicago.variable}`}>
        {children}
      </body>
    </html>
  );
}
