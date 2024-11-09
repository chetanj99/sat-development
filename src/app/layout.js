import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Sat Associates",
  description: "Sat Associates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
