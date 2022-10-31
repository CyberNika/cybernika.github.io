import { ReactNode } from "react";
import Image from 'next/image'

interface FooterProps {
}

const Footer = () => {
  return <footer className="flex justify-center items-center h-16 border-t border-t-slate-200 dark:border-t-slate-700">
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center grow"
  >
    Powered by{' '}
    <span className="ml-2">
      <Image className="dark:invert" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </span>
  </a>
</footer>
}

export default Footer;
