import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Codesk | Your Own Space for Innovation & Productivity",
    template: "%s | Codesk",
  },
  description:
    "Codesk offers modern coworking and shared office spaces designed for startups, freelancers, and growing teams. Experience innovation, sustainability, and a productive work environment tailored for success.",
  keywords: [
    "Codesk",
    "Coworking Space",
    "Shared Office",
    "Workspace for Startups",
    "Freelancer Office Space",
    "Modern Office Environment",
    "Sustainable Workspace",
  ],
  authors: [{ name: "Codesk Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}