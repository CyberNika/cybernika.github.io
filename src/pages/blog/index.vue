<script setup lang="ts">
import { postSortedKeys, posts } from '../../../posts/manifest.json'

const route = useRoute()

const page = route.query.page ? Number(route.query.page) : 0
const pageSize = 10

const displayPosts = postSortedKeys.slice(page * pageSize, (page + 1) * pageSize).map(item => posts[item as keyof typeof posts])

const { t, d } = useI18n()
</script>

<template>
  <h1 content page-title>
    {{ t('blog.title') }}
  </h1>

  <ul animate-fade-in animate-count-1 animate-duration-1s content font-serif>
    <li v-for="item of displayPosts" :key="item.key" mt-6>
      <h2
        text-2xl font-bold
      >
        <RouterLink
          pb-1 border-b-3 border-transparent
          hover="border-neutral-800 dark:border-neutral-100"
          :to="`/blog/${item.key}`"
        >
          {{ item.title }}
        </RouterLink>
      </h2>

      <p whitespace-nowrap overflow-x-auto mt-3 flex items-center font-mono font-semibold>
        <ul
          v-if="'categories' in item"
          flex items-center
          text-xs mr-1
        >
          <li
            v-for="category of item.categories"
            :key="category"
            p="x-1.5 y-0.5" mr-2 cursor-pointer
            border="1.5 brand" rounded-lg
            hover:bg-brand hover:text-white
          >
            <RouterLink :to="`/blog/category/${category}`">
              {{ category }}
            </RouterLink>
          </li>
        </ul>

        <span italic text-brand>{{ d(item.date) }}</span>

        <ul
          v-if="'tags' in item"
          flex items-center
          text-xs ml-1 italic
        >
          <li
            v-for="tag of item.tags"
            :key="tag"
            ml-2 cursor-pointer
            hover:text-brand
            rounded-md
          >
            <RouterLink :to="`/blog/tag/${tag}`">
              #{{ tag }}
            </RouterLink>
          </li>
        </ul>
      </p>
    </li>
  </ul>
</template>
