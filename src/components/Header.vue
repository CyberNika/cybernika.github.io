<script setup lang="ts">
import { toggleDark } from '~/composables'

const menus = [
  { id: 'HOME', title: '首页', link: '/', exact: false },
  // { id: "BLOG", title: "博客", link: "/blog" },
  // { id: "GALLERY", title: "作品", link: "/gallery" },
  { id: 'ABOUT', title: '关于', link: '/about' },
  { id: 'SAY_HI', title: '留言', link: '/#say-hi' },
]

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <header>
    <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-campsite />

      <h3 class="header-title">
        HEY NEXT
      </h3>
    </RouterLink>

    <nav class="header-nav">
      <ul class="header-menus">
        <li v-for="item of menus" :key="item.id" class="header-menu">
          <Link
            class="header-menu-link"
            active-class-name="header-menu-link-active"
            to="{item.link}"
          >
            {item.title}
          </Link>
        </li>
      </ul>

      <ul class="header-actions">
        <li class="header-action" @click="toggleDark()">
          {isDark ? <SunOne /> : <Moon />}
        </li>
      </ul>
    </nav>
  </header>
</template>
