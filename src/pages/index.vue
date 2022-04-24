<script setup lang="ts">
import Hello from './components/Hello.vue'
import Travel from './components/Travel.vue'
import Skill from './components/Skill.vue'
import Photo from './components/Photo.vue'
import Other from './components/Other.vue'

import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="home">
    <Hello />
    <Travel />
    <Skill />
    <Photo />
    <Other />

    <!-- <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    > -->
  </div>
</template>

<style>
.home-section {
  @apply wrapper relative flex flex-col justify-center font-serif text-center;
}

.home-section-title {
  @apply text-2xl;
  @apply lg:text-3xl;
}

.home-section-title + .home-section-title {
  @apply mt-2xl;
}

.home-section-title-magic {
  @apply block sm:inline;
}
</style>
