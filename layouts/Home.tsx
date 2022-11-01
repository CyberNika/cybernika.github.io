import { ReactNode } from "react";

import { Header, Footer } from "@/components";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <Header className="fixed w-full top-0 left-0" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
