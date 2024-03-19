import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
// import All Components
import Navbar from "@/components/navbar/Navbar";
import LinksProvider from "@/contexts/linksContexts/LinksContext";
// Context Provider import
import AsideProvider from "@/contexts/asideContext/AsideContext";

const Noto = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "العلوم ",
  description: "مادة العلوم الصف الرابع الابتدائي ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LinksProvider>
        <AsideProvider>
          <body className={Noto.className}>
            <Navbar />
            {children}
          </body>
        </AsideProvider>
      </LinksProvider>
    </html>
  );
}
