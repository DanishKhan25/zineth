import { ChakraProvider } from "@chakra-ui/react";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Zineth Nova Hash",
  description: "Invest with Zineth Nova Hash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
