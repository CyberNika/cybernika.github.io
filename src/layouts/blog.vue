<script setup lang="ts">
import { postSortedKeys, posts } from '../../posts/manifest.json'

type PostKeys = keyof typeof posts

const { d } = useI18n()
const route = useRoute()

const post = computed(() => {
  const postKey = route.meta.postKey as PostKeys
  return posts[postKey]
})

const displayPosts = postSortedKeys.slice(0, 5).map(item => posts[item as PostKeys])
</script>

<template>
  <div flex="~ col" min-h-screen>
    <Header pos="sticky top-0 left-0" w-full h-16 />

    <main flex-1 wrapper>
      <div content lg:flex items-start>
        <article overflow-x-hidden flex-1 flex-shrink>
          <h1 page-title mb-3>
            {{ post.title }}
          </h1>

          <p truncate flex items-center font-mono font-semibold>
            <ul
              v-if="post.categories.length"
              flex items-center
              text-xs mr-1
            >
              <li
                v-for="category of post.categories"
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

            <span italic text-brand>{{ d(post.date) }}</span>

            <ul
              v-if="post.tags.length"
              flex items-center
              text-xs ml-1 italic
            >
              <li
                v-for="tag of post.tags"
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

          <RouterView v-slot="{ Component }">
            <component :is="Component" animate-fade-in animate-count-1 animate-duration-1s mt-6 />
          </RouterView>
        </article>

        <hr my-5 lg:hidden>

        <div
          w-full mt-5 font-serif
          lg:w-xs lg:ml-15 lg:mt-0
          lg:opacity-70
        >
          <div lg:fixed>
            <section v-if="post.toc.length">
              <h4 text-lg font-semibold>
                目录
              </h4>

              <Toc mt-1 max-h-90 overflow-y-auto :items="post.toc" content />
            </section>

            <section v-if="displayPosts.length" mt-5>
              <h4 text-lg font-semibold>
                最新文章
              </h4>

              <ul content mt-1>
                <li v-for="item of displayPosts" :key="item.key">
                  <h2>
                    <RouterLink
                      border-b-1 border-transparent
                      hover="border-neutral-800 dark:border-neutral-100"
                      :to="`/blog/${item.key}`"
                    >
                      {{ item.title }}
                    </RouterLink>
                  </h2>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
