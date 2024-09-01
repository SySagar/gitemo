import moment from "moment";
import Install from "./components/Install";
import { FaNpm, FaGithub } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center pl-24 pr-24 justify-center bg-[#08090A]  overflow-hidden">
      <div className="relative">
      <p className="text-[#B2F6FF] text-sm relative bottom-3 left-44">
        Lets make good commits!
        </p>
      <p
      className="master__title tracking-wide z-10 text-8xl text-center relative  transform -translate-y-10"
      >
        Gitemo
      </p>
     
        </div>

      <div className="blob">

      </div>

    <div className="z-10 flex flex-col justify-center items-center gap-6 overflow-hidden -translate-y-5">
    <h2 className="text-white font-light text-sm md:text-md lg:text-lg">
      A simple, fast, and lightweight CLI tool for creating your production level commits with emojis.
    </h2>
    <div className="mt-6">
      <Install />
    </div>

      <div className="flex flex-row justify-center items-center gap-14">
        <Link target="_blank" href={"https://github.com/SySagar/gitemo-cli"} className="github">
          <FaGithub size={35} color="#fff" />
        </Link>
        
        <Link target="_blank" href={"https://www.npmjs.com/package/gitemo-cli"} className="npm">
  
          <FaNpm size={60} color="#fff" />
        </Link>

    </div>
   
    <h2 className="text-white tracking-wide text-md font-thin whitespace-nowrap mt-5 text-center">
      Usage <a className="underline underline-offset-4" target="_blank" href="https://github.com/SySagar/gitemo-cli?tab=readme-ov-file#gitemo-cli">documentation</a>.{"  "}
      Please star this if you find the tool useful.
    </h2>
      </div>
      <div className="absolute bottom-3 w-5/6  flex flex-col py-3 pt-1 gap-2 justify-center items-center">
      <div className="divider flex w-10/12 mt-20"></div>
      <p className="text-sm text-slate-200 text-opacity-40 text-nowrap py-3">
      Gitemo @{moment().format('YYYY')}
      </p>
      </div>
    </main>
  );
}
