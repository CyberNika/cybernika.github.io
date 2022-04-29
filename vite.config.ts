import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import Anchor from 'markdown-it-anchor'
import string from 'string'
import Unocss from 'unocss/vite'

import viteBlogPlugin from './scripts/vite-plugin-blog'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    viteBlogPlugin(),

    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: ['src/pages', 'posts'],
      extensions: ['vue', 'md'],
      exclude: ['**/components/*.vue'],
      extendRoute: (route) => {
        if (route.component.startsWith('/posts/')) {
          return {
            ...route,
            meta: { ...route.meta, layout: 'blog', postKey: route.component.slice(7, -3) },
          }
        }

        return route
      },
      onRoutesGenerated: (routes) => {
        return routes.map(route => route.component.startsWith('/posts/')
          ? {
              ...route,
              path: `/blog${route.path}`,
            }
          : route)
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: 'prose',
      headEnabled: true,
      markdownItOptions: {
        breaks: true,
      },
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(Anchor, {
          permalink: true,
          permalinkSymbol: '#',
          // permalinkBefore: true,
          slugify: (s: string) => string(s).slugify().toString(),
        })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect(),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() { generateSitemap() },
    includedRoutes(paths, routes) {
      return routes.flatMap((route) => {
        return route.path
      })
    },
  },
})
