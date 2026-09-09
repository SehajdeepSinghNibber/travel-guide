import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "Travel Guide Website",
  description: "Best Travel Guidance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} w-screen h-screen bg-black text-white`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}