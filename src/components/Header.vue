<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const menus = [
  { id: 'HOME', title: '首页', link: '/', exact: false },
  // { id: "BLOG", title: "博客", link: "/blog" },
  // { id: 'GALLERY', title: '作品', link: '/gallery' },
  { id: 'ABOUT', title: '关于', link: '/about' },
  // { id: 'SAY_HI', title: '留言', link: '/say-hi' },
]

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <header
    wrapper
    flex justify-between items-center
    backdrop-blur-lg
    z-30
  >
    <RouterLink
      to="/"
      opacity-80 hover:opacity-100
      title="SuperStack"
    >
      <span inline-block i-carbon-campsite vertical-middle />

      <h3 inline-block ml-1 vertical-middle font-bold text-lg>
        SUPER STACK
      </h3>
    </RouterLink>

    <nav flex>
      <ul flex items-center>
        <li
          v-for="item of menus" :key="item.id"
          ml-5
        >
          <RouterLink
            v-slot="{ href, navigate, isExactActive }"
            :to="item.link"
            custom
          >
            <a
              :href="href"
              hover:opacity-100
              hover:font-bold
              :class="{
                'opacity-50': !isExactActive,
                'opacity-100': isExactActive,
                'font-bold': isExactActive,
              }"
              @click="navigate"
            >
              {{ item.title }}
            </a>
          </RouterLink>
        </li>
      </ul>

      <ul flex items-center>
        <li
          ml-5
          opacity-50 cursor-pointer
          hover:opacity-100 hover:font-bold
          i-carbon-sun dark:i-carbon-moon
          @click="toggleDark()"
        />
      </ul>
    </nav>
  </header>
</template>
