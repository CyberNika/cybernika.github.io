<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const { t } = useI18n()

const menus = [
  { id: 'HOME', title: t('header.nav.home'), link: '/', exact: false },
  // { id: "BLOG", title: t('header.nav.blog'), link: "/blog" },
  // { id: 'GALLERY', title: t('header.nav.gallery'), link: '/gallery' },
  { id: 'ABOUT', title: t('header.nav.about'), link: '/about' },
  // { id: 'SAY_HI', title: t('header.nav.say-hi'), link: '/say-hi' },
]

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
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
      font-bold text-lg
      :title="t('header.name')"
    >
      <span inline-block i-carbon-campsite vertical-middle />

      <h3 inline-block ml-1 vertical-middle>
        {{ t('header.slogan') }}
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
          :title="t('header.button.toggle-mode')"
          @click="toggleDark()"
        />
      </ul>
    </nav>
  </header>
</template>
