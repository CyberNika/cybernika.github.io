import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { Article } from "@/components";
import { getPost, getPosts } from "@/utils/post";
import { markdownToHtml } from "@/utils/markdown";

interface BlogArticleProps {
  id: string;
  slug: string[];
  content: string;
  postData: ReturnType<typeof getPost>;
}

const BlogArticle: NextPage<BlogArticleProps> = ({
  id,
  slug,
  content,
  postData,
}) => {
  const router = useRouter();

  return (
    <div>
      Blog slug {slug.join()}
      Blog id {id}
      Blog title {postData.title}
      <Article content={content} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const posts = getPosts();
  const slugs = posts.map((item) => item.id.split("/"));

  console.log("slugs", slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  if (!slug) return { props: {} };

  const id = Array.isArray(slug) ? slug.join("/") : slug;
  const postData = getPost(id);
  const content = await markdownToHtml(postData.content);

  return {
    props: {
      id,
      slug,
      content,
      postData: postData,
    },
  };
};

export default BlogArticle;
