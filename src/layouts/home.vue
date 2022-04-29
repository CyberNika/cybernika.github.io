<template>
  <div flex="~ col" min-h-screen>
    <Header pos="fixed top-0 left-0" h-16 w-full />

    <main wrapper-x flex-1>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
