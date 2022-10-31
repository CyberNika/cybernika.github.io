import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

const BookChapter: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      Book Chapter {slug}
    </div>
  )
}

export default BookChapter
