const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center py-4 wrapper border-t-1 border-t-gray-200 dark:border-t-slate-700 text-xs sm:text-sm gray-400">
      <span
        // order="2 xl:none"
        className="mt-1 xl:mt-0"
      >
        <span>© 2017-2022 | </span>
        <a href="https://superstack.pro">SUPERSTACK.PRO</a>
        <span> | </span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          京ICP备18064894号-1
        </a>
      </span>

      <span className="font-mono">
        Created with ❤ by
        <a href="https://github.com/SuperStackPro" target="__blank">
          Stephen
        </a>
      </span>
    </footer>
  );
};

export default Footer;
