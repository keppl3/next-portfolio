import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos Huriel</title>
      </Head>   
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
        <ul className="table mx-auto space-y-6 md:space-y-8">
          <li className="md:text-xl">
            <span className="font-bold">E-mail</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a href="mailto:huriel-lopes@outlook.com" 
               className="text-sm md:text-lg text-slate-300 underline truncate"
               >
               huriel-lopes@outlook.com
             </a>
             <CopyButton textToCopy="huriel-lopes@outlook.com"/>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold">LinkedIn</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a 
                className="text-sm md:text-lg text-slate-300 underline truncate" 
                href="https://www.linkedin.com/in/huri3l"
               >
                https://www.linkedin.com/in/huri3l
              </a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold">GitHub</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
              className="text-sm md:text-lg text-slate-300 underline truncate" 
              href="https://github.com/huri3l"
              >
                https://github.com/huri3l
            </a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold">YouTube</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a 
                className="text-sm md:text-lg text-slate-300 underline truncate"
                href="https://www.youtube.com/huri3l"
                >
                  https://www.youtube.com/huri3l
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contatos
