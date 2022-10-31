import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { getSortedPosts } from '@/utils/post'

interface BlogProps {
  postsData: ReturnType<typeof getSortedPosts>
}

const Blog: NextPage<BlogProps> = ({ postsData }) => {
  return (
    <div>
      <ul className="">
          {postsData.map(({ id, date, title }) => (
            <li className="" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const postsData = getSortedPosts()
  console.log(postsData)
  return {
    props: {
      postsData
    }
  }
}

export default Blog
