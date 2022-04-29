<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
const route = useRoute()
const { t } = useI18n()

const menus = [
  { id: 'HOME', title: t('header.nav.home'), link: '/', isActive: () => route.path === '/' },
  { id: 'BLOG', title: t('header.nav.blog'), link: '/blog', isActive: () => route.path.startsWith('/blog') },
  // { id: 'GALLERY', title: t('header.nav.gallery'), link: '/gallery', isActive: () => route.path === '/' },
  { id: 'ABOUT', title: t('header.nav.about'), link: '/about', isActive: () => route.path === '/about' },
  // { id: 'SAY_HI', title: t('header.nav.say-hi'), link: '/say-hi', isActive: () => route.path === '/say-hi' },
]

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
</script>

<template>
  <header
    wrapper z-30 bg-amber-50 dark:bg-slate-800 bg-opacity-98 dark:bg-opacity-98
    flex justify-between items-center
  >
    <RouterLink
      to="/"
      lt-sm="whitespace-pre-line leading-none"
      p="x-2 y-0.5"
      bg-brand rounded-lg
      font-bold font-mono
      text-sm text-white italic
      hover:opacity-80
      sm:text-md
      style="word-spacing: -0.3em;"
      :title="t('header.name')"
    >
      {{ t('header.slogan') }}
    </RouterLink>

    <nav flex overflow-x-hidden>
      <ul ml-5 flex overflow-x-auto whitespace-nowrap items-center>
        <li
          v-for="item of menus" :key="item.id"
          not-last:mr-5
        >
          <RouterLink
            v-slot="{ href, navigate }"
            custom
            :to="item.link"
          >
            <a
              hover:opacity-100
              hover:font-bold
              :href="href"
              :class="item.isActive() ? ['opacity-100', 'font-bold'] : ['opacity-50']"
              @click="navigate"
            >
              {{ item.title }}
            </a>
          </RouterLink>
        </li>
      </ul>

      <ul ml-5 flex items-center>
        <li
          not-last:mr-5
          opacity-50 cursor-pointer
          hover:opacity-100 hover:font-bold
          i-carbon-sun dark:i-carbon-moon
          :title="t('header.button.toggle-mode')"
          @click="toggleDark()"
        />
      </ul>
    </nav>
  </header>
</template>
