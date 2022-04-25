<template>
  <div flex="col" min-h-screen>
    <Header pos="fixed top-0 left-0" h-16 w-full />

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
