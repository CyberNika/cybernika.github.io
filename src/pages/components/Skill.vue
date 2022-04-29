<script setup lang="ts">
import SkillGraph from './SkillGraph.vue'
</script>

<template>
  <div class="home-section" text-center>
    <h3 class="home-section-title">
      <p>我热爱编程</p>
      <p>
        相信优雅的代码和艺术<span class="home-section-title-magic">可以改变人们的生活</span>
      </p>
    </h3>

    <h3 class="home-section-title">
      <p>我钟爱挑战</p>
      <p>
        认为不断尝试和勇于探索<span class="home-section-title-magic">可以让我们成长</span>
      </p>
    </h3>

    <div mt-10 overflow-x-auto overflow-y-hidden>
      <SkillGraph
        h-80 w-155 mx-auto
        lg:w-full lg:h-35vh
      />
    </div>
  </div>
</template>
