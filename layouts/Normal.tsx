import { ReactNode } from "react";

import { Header, Footer } from "@/components";

interface NormalLayoutProps {
  children: ReactNode;
}

const NormalLayout = ({ children }: NormalLayoutProps) => {
  return <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
}

export default NormalLayout;
