<template>
  <span class="px-10 mx-auto block text-center">
    <ul class="flex items-center justify-center gap-xl p-s underline">
      <Icon name="NuxtIcon" size="50" />

      <li><NuxtLink to="/">home</NuxtLink></li>
      <li><NuxtLink to="/about">about</NuxtLink></li>
      <li><NuxtLink to="/tag/2">tag 2</NuxtLink></li>
      <li><NuxtLink to="/parent">parent</NuxtLink></li>
      <li><NuxtLink to="/plugin">plugin</NuxtLink></li>
      <li><a href="/">server render</a></li>
    </ul>
  </span>
</template>
