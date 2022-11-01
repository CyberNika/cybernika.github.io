import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface PostItem {
  id: string;
  title?: string;
  date?: Date | string;
  tags?: string[];
  categories?: string[];
  [key: string]: any;
}

export const getPosts = (type = 'blog') => {
  const root = path.join(process.cwd(), 'posts', type)
  const dirs = [root]
  const posts: PostItem[] = []

  while (dirs.length) {
    const dir = dirs.pop()!

    const files = fs.readdirSync(dir, { withFileTypes: true })

    files.forEach(file => {
      const name = file.name
      const fullPath = path.join(dir, name)

      if (file.isDirectory()) {
        dirs.push(fullPath)
      } else if (path.extname(name) === '.md') {
        const id = path.relative(root, fullPath).replace(/\.md$/, '')
        const shortid = name.replace(/\.md$/, '')
        const content = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(content, { excerpt: true, excerpt_separator: '<!-- more -->' })

        const postItem: PostItem = {
          id,
          shortid,
          excerpt: matterResult.excerpt,
          ...matterResult.data
        }

        posts.push(postItem)
      }
    })
  }

  return posts
}

export const getSortedPosts = (type = 'blog') => {
  const posts = getPosts(type)

  return posts.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1

    return a.date < b.date ? 1 : -1
  })
}

export const getPost = (id: string, type = 'blog') => {
  const postPath = path.join(process.cwd(), 'posts', type, id) + '.md'

  const content = fs.readFileSync(postPath, 'utf8')
  const matterResult = matter(content, { excerpt: true, excerpt_separator: '<!-- more -->' })

  const postItem: PostItem = {
    id,
    excerpt: matterResult.excerpt,
    content: matterResult.content,
    ...matterResult.data
  }

  return postItem
}
