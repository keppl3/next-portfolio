import { ReactNode } from 'react'
import { JetBrains_Mono } from 'next/font/google';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
});

export const Layout = ({ children }: LayoutProps) => {
  return(
    <div className={jetBrains_Mono.className} >
      <Header/>
      {children}
    </div>
  );
};
