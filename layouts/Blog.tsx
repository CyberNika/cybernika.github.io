import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <div>
    <div>bbbbb</div>

  <main>{children}</main>
</div>
}

export default BlogLayout;
