import path from 'path'
import fs from 'fs/promises'
import type { Plugin } from 'vite'
import matter from 'gray-matter'
import string from 'string'

interface TocNode {
  level: number
  title: string
  anchor: string
  children?: TocNode[]
}

const generateTOC = (content: string) => {
  const tocHead: TocNode = {
    level: 0,
    title: 'head',
    anchor: '',
    children: [],
  }

  const nodes = [tocHead]

  content.split('\n').forEach((line) => {
    const match = line.match(/^(#{1,6})\s(.+)/)

    if (!match)
      return

    const toc: TocNode = {
      level: match[1].length,
      title: match[2],
      anchor: `#${string(match[2]).slugify().toString()}`,
    }

    while (nodes.length) {
      const last = nodes.pop()!

      if (last.level < toc.level) {
        nodes.push(last, toc)

        if (last.children)
          last.children.push(toc)
        else
          last.children = [toc]

        break
      }
    }
  })

  return tocHead.children || []
}

const viteBlogPlugin = (): Plugin => {
  const postsRoot = path.resolve('posts')
  const isMarkdown = (file: string) => file.endsWith('.md')

  const tags: Record<string, number> = {}
  const categories: Record<string, number> = {}
  const posts: Record<string, {
    key: string
    file: string
    title: string
    date: Date
    updated: Date
    categories: string[]
    tags: string[]
    toc: TocNode[]
    excerpt?: string
  }> = {}

  const getKeyByFile = (file: string) => path.relative(postsRoot, file).replace(/\.md$/, '')

  const handlePost = async(file: string, op: 'add' | 'update' | 'delete' = 'add') => {
    const key = getKeyByFile(file)

    if (op === 'delete') {
      const post = posts[key]

      if (!post)
        return Promise.resolve()

      post.categories?.forEach((category) => {
        categories[category] = categories[category] ? categories[category] - 1 : 0
      })

      post.tags?.forEach((tag) => {
        tags[tag] = tags[tag] ? tags[tag] - 1 : 0
      })

      delete posts[key]
    }

    try {
      const content = await fs.readFile(file)
      const stat = await fs.stat(file)
      const { data, excerpt } = matter(content, {
        excerpt: true,
        excerpt_separator: '<!-- more -->',
      })

      data.categories?.forEach((category: string) => {
        categories[category] = (categories[category] ?? 0) + 1
      })

      data.tags?.forEach((tag: string) => {
        tags[tag] = (tags[tag] ?? 0) + 1
      })

      posts[key] = {
        ...posts[key],
        key,
        file,
        title: data.title || path.basename(file, '.md'),
        date: data.date || stat.ctime,
        updated: data.updated || stat.mtime,
        categories: data.categories || [],
        tags: data.tags || [],
        toc: [],
        excerpt,
      }
    }
    catch (error) {
      console.log('handlePost readFile error', error)
    }
  }

  const generateManifest = () => {
    const postSortedKeys = Object.values(posts).sort((a, b) => {
      if (a.date && b.date && a.date !== b.date)
        return a.date > b.date ? 1 : -1

      if (a.date && !b.date) {
        if (!b.updated)
          return 1

        return a.date > b.updated ? 1 : -1
      }

      if (!a.date && b.date) {
        if (!a.updated)
          return -1

        return a.updated > b.date ? 1 : -1
      }

      if (!b.updated)
        return 1
      if (!a.updated)
        return -1

      return a.updated > b.updated ? 1 : -1
    }).map(item => item.key)

    return fs.writeFile(
      path.resolve(postsRoot, 'manifest.json'),
      JSON.stringify({
        postSortedKeys,
        posts,
        tags,
        categories,
      }, null, 2),
    ).catch((err) => {
      console.log('generateManifest error', err)
    })
  }

  const reversePosts = async(dir = postsRoot) => {
    try {
      const files = await fs.readdir(dir, { withFileTypes: true })

      for (const file of files) {
        const filePath = path.resolve(dir, file.name)

        if (file.isDirectory())
          await reversePosts(filePath)

        else if (isMarkdown(file.name))
          await handlePost(filePath)
      }
    }
    catch (error) {
      console.log('reversePosts readdir error', error)
    }
  }

  return {
    name: 'vite-plugin-blog',
    enforce: 'pre',

    async buildStart() {
      await reversePosts()
      await generateManifest()
    },

    configureServer({ watcher }) {
      watcher
        .on('add', (file) => {
          if (!isMarkdown(file))
            return

          handlePost(file, 'add')
            .then(() => {
              generateManifest()
            })
        })
        .on('change', (file) => {
          if (!isMarkdown(file))
            return

          handlePost(file, 'update')
            .then(() => {
              generateManifest()
            })
        })
        .on('unlink', (file) => {
          if (!isMarkdown(file))
            return

          handlePost(file, 'delete')
            .then(() => {
              generateManifest()
            })
        })
    },

    transform: async(code: string, id: string) => {
      if (!isMarkdown(id))
        return

      const key = getKeyByFile(id)

      posts[key] = {
        ...posts[key],
        toc: generateTOC(code),
      }

      await generateManifest()
    },
  }
}

export default viteBlogPlugin
