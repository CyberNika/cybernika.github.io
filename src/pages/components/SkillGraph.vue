<script setup lang="ts">
import VChart from 'vue-echarts'

import { initSkillGraph } from '../composables/skill'

const skillOption = initSkillGraph()
</script>

<template>
  <v-chart :option="skillOption" autoresize />
</template>
