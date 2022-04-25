<script setup lang="ts">
</script>

<template>
  <div flex="~ col" min-h-screen>
    <Header pos="sticky top-0 left-0" w-full h-16 />

    <main flex-1>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
