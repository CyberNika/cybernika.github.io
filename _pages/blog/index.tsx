import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getSortedPosts } from "@/utils/post";

interface BlogProps {
  postsData: ReturnType<typeof getSortedPosts>;
}

const Blog: NextPage<BlogProps> = ({ postsData }) => {
  return (
    <>
      <h2 className="content page-title">Blog</h2>

      <ul className="animate-fade-in animate-count-1 animate-duration-1s content font-serif">
        {postsData.map(({ id, title, date, categories, tags }) => (
          <li className="text-2xl font-bold" key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>

            <div className="whitespace-nowrap overflow-x-auto mt-3 flex items-center font-mono font-semibold">
              <ul className="flex items-center text-xs mr-1">
                {categories?.map((item) => (
                  <li
                    key={item}
                    className="p-x-1.5 p-y-0.5 mr-2 border-1.5 border-brand rounded-lg cursor-pointer hover:bg-brand hover:text-white"
                  >
                    <Link href={`/blog/category/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>

              <span className="italic text-brand">{date?.toString()}</span>

              <ul className="flex items-center text-xs ml-1 italic">
                {tags?.map((item) => (
                  <li
                    key={item}
                    className="ml-2 cursor-pointer hover:text-brand rounded-md"
                  >
                    <Link href={`/blog/tag/${item}`}>#{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const postsData = getSortedPosts();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      postsData,
    },
  };
};

export default Blog;
