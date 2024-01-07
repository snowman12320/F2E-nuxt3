<template>
  <main class="px-l pt-l sm:px-4xl">
    <IndexTabsGroup />
    <section class="z-[1] flex flex-col justify-between sm:flex-row">
      <ClientOnly>
        <IndexLeftBarView />
        <IndexTaiwanBarView />
        <IndexRightBarView />
      </ClientOnly>
    </section>
  </main>
</template>
