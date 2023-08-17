import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Menu } from "./menu";
import {useCallback, useState} from 'react'; 
import { MenuIcon } from "@/components/icons/menulton";
const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});
export const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState (false);
const openMenu = useCallback(() => {
  setIsMenuOpen(true);
}, []);
const closeMenu = useCallback(() => {
  setIsMenuOpen(false);
}, []);
  return (
    <header
      className={`${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}
    >
      <Link href="/">
        <Image src="/favicon.svg" width={55} height={55} alt="Icone de letra H, Logo de Huriel" />
      </Link>
      <button className="p-1 md:hidden" onClick={openMenu}>
        <MenuIcon className="fill-white w-10 h-10"/>
      </button>
      <nav>
      <Link href="/">Sobre mim</Link>
       
        <Link href="/contatos">Entre em contato</Link>
      </nav>
  
      <Menu isVisible={isMenuOpen} onClose={closeMenu}/>
    </header>
  );
};
