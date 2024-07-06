import Image from "next/image";
import Install from "./components/Install";
import {Github } from 'lucide-react'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pl-24 pr-24 pt-14 bg-[#FDE5D0] overflow-hidden">
      <Image className="rotate" src="/logo.png" width={270} height={270} alt="image" />
    <div className="flex flex-col justify-center items-center gap-6 mt-12  overflow-hidden">
    <h2 className="text-orange-600 font-bold text-m md:tsxt-md lg:text-lg">
      A simple, fast, and lightweight CLI tool for creating your production level commits with emojis.
    </h2>
      <Install />

      <div className="flex flex-row gap-8">
        <Link target="_blank" href={"https://github.com/SySagar/gitemo-cli"} className="github">
          <Image src="/github.png" width={40} height={40} alt="github"/>
        </Link>
        
        <Link target="_blank" href={"https://www.npmjs.com/package/gitemo-cli"} className="npm">
        <Image src="/npm.png" width={80} height={80} alt="github"/>
        </Link>

    </div>
   
    <h2 className="text-gray-600 font-normal text-sm">
      Please remember to leave a star on the GitHub repository if you find this project useful.
    </h2>
      </div>
      <div className="flex border-2 w-5/6 border-[#60271A] mt-4"></div>
    </main>
  );
}
