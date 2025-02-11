import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Navbar/Sidebar";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});

export const metadata = {
   title: "E-Jurnal PKL | SMK 3 Kediri",
   description: "Jurnal PKL SMKN 3 Kota Kediri",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className="dark">
         <body
            className={`${inter.className} antialiased container mx-auto h-[100vh] p-4 flex gap-8 bg-foreground text-background dark:bg-background dark:text-foreground`}
            suppressHydrationWarning>
            <Sidebar />
            {children}
         </body>
      </html>
   );
}
