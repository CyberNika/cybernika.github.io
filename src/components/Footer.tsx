import classNames from 'classnames';
import { CSSProperties } from 'react';

interface FooterProps {
  className?: string;
  style?: CSSProperties;
}

const Footer = ({ className, style }: FooterProps) => {
  return (
    <footer
      className={classNames(
        'flex flex-col lg:flex-row justify-between items-center',
        'py-4 wrapper',
        'border-t border-t-gray-200 dark:border-t-slate-700',
        'text-xs sm:text-sm text-gray-400 dark:text-gray-800',
        className,
      )}
      style={style}
    >
      <span className="mt-1 xl:mt-0 order-2 xl:order-none">
        <span>© 2017-2022 | </span>
        <a href="https://cybernika.net">CYBERNIKA.NET</a>
        <span> | </span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          京ICP备18064894号-1
        </a>
      </span>

      <span className="font-mono">
        <span>Created with ❤ by </span>
        <a href="https://github.com/CyberNika" target="__blank">
          Nika
        </a>
      </span>
    </footer>
  );
};

export default Footer;
