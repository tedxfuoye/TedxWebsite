import { Mulish } from "next/font/google";
import "../../styles/globals.css";
import Nav from "@/components/app/nav/Nav";
import Footer from "@/components/app/footer/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "TEDxFUOYE",
  description: "Ideas Worth Spreading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Nav />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
