import Navbar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import githubIcon from "../../public/github-mark.svg";
import twitterIcon from "../../public/icons8-twitter-circled.svg";
import facebookIcon from "../../public/icons8-facebook.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le Minh's Kitchen",
  description: "Welcome to Minh's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col h-full ">
          <Navbar />
          <div className="grid grid-cols-12 h-full">
            <div className="col-start-1 col-span-1 flex flex-col items-center h-screen">
              <div className="w-[2px] bg-black h-full z-0 basis-2/3" />
              <div className="flex flex-col bg-white z-1">
                <a href="#" className="hover:text-gray-600 my-4 basis-1/6">
                  <Image width="29" src={githubIcon} alt="GitHub Icon" />
                </a>
                <a href="#" className="mb-4 hover:text-gray-600">
                  <Image width="30" src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="#" className="mb-4 hover:text-gray-600">
                  <Image width="30" src={facebookIcon} alt="Twitter Icon" />
                </a>
              </div>
              <div className="w-[2px] bg-black h-full z-0 basis-1/6" />
            </div>
            <div className="col-start-2 col-span-11 flex justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
