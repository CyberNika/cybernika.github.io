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
  </div>
</template>

<style>
.home-section {
  @apply wrapper relative flex flex-col justify-center;
}

.home-section-title {
  @apply text-2xl font-bold;
  @apply lg:text-3xl;
  @apply xl:text-4xl;
}

.home-section-title + .home-section-title {
  @apply mt-2xl;
}

.home-section-title-magic {
  @apply block sm:inline;
}
</style>
