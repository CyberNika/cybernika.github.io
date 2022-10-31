import type { GetStaticPropsContext, GetStaticPathsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import { getPost, getPosts } from '@/utils/post'

interface BlogArticleProps {
  id: string
  slug: string[]
  postData: ReturnType<typeof getPost>
}

const BlogArticle: NextPage<BlogArticleProps> = ({ id, slug, postData }) => {
  const router = useRouter()

  return (
    <div>
      Blog slug {slug.join()}
      Blog id {id}
      Blog title {postData.title}
    </div>
  )
}

export const getStaticPaths = async (context: GetStaticPathsContext) => {
  const posts = getPosts()
  const slugs = posts.map(item => item.id.split('/'))

  console.log('slugs', slugs)

  return {
    paths: slugs.map(slug =>
      ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug

  if (!slug) return

  const id = Array.isArray(slug) ? slug.join('/') : slug;
  const postData = getPost(id)

  return {
    props: {
      id,
      slug,
      postData: postData,
    }
  }
}

export default BlogArticle
