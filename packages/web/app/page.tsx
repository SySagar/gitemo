import moment from "moment";
import Install from "./components/Install";
import { FaNpm, FaGithub } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center pl-24 pr-24 justify-center bg-[#08090A]  overflow-hidden">
      <div className="relative -translate-y-6 sm:-translate-y-0">
      <p className="text-[#B2F6FF] text-[10px] sm:text-[12px] lg:text-sm relative bottom-5 sm:bottom-4 lg:bottom-3 left-24 sm:left-28 lg:left-44">
        Lets make good commits!
        </p>
      <p
      className="master__title tracking-wide z-10 text-6xl sm:text-7xl lg:text-8xl text-center relative  transform -translate-y-10"
      >
        Gitemo
      </p>
     
        </div>

      <div className="blob">

      </div>

    <div className="z-10 flex flex-col justify-center items-center gap-6 overflow-hidden md:-translate-y-5  -translate-y-7 sm:-translate-y-0">
    <h2 className="text-white font-light text-sm text-center px-3 sm:px-0 md:text-left mt-3 md:text-base lg:text-lg">
      A simple, fast, and lightweight CLI tool for creating your production level commits with emojis.
    </h2>
    <div className="mt-6">
      <Install />
    </div>

      <div className="flex flex-row justify-center items-center gap-10 md:gap-14">
        <Link target="_blank" href={"https://github.com/SySagar/gitemo-cli"} className="github">
          <FaGithub className="w-8 md:w-10 h-8 md:h-10"  color="#fff" />
        </Link>
        
        <Link target="_blank" href={"https://www.npmjs.com/package/gitemo-cli"} className="npm">
  
          <FaNpm className="w-12 h-12 md:w-16 md:h-16"  color="#fff"/>
        </Link>

    </div>
   
    <h2 className="text-white tracking-wide text-xs md:text-base px-2 sm:px-0  font-thin whitespace-wrap sm:whitespace-nowrap mt-5 text-center">
      Usage <a className="underline underline-offset-4" target="_blank" href="https://github.com/SySagar/gitemo-cli?tab=readme-ov-file#gitemo-cli">documentation</a>.{"  "}
      Please star this if you find the tool useful.
    </h2>
      </div>
      <div className="absolute bottom-1 sm:bottom-3 w-11/12 md:w-5/6  flex flex-col py-3 pt-1 gap-2 justify-center items-center">
      <div className="divider flex w-10/12 mt-2 md:mt-20"></div>
      <p className="text-[11px] sm:text-sm text-slate-200 text-opacity-40 text-nowrap py-3">
      Gitemo @{moment().format('YYYY')} | <a href="https://x.com/SySagar2" target="_blank" className="text-[#1da1f2]">Twitter</a> |     <a href="https://cal.com/sy-sagar/quick-chat" target="_blank" className=" text-white text-sm">Hire me</a>
      </p>
      </div>
    </main>
  );
}
