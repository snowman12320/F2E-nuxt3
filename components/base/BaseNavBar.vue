<template>
  <span class="px-10 mx-auto block text-center">
    <ul class="flex items-center justify-center gap-xl p-s underline">
      <Icon name="NuxtIcon" size="50" />

      <li :class="{ 'bg-gray-300': route.path === '/' }">
        <NuxtLink to="/">home</NuxtLink>
      </li>
      <li :class="{ 'bg-gray-300': route.path === '/about' }">
        <NuxtLink to="/about">about</NuxtLink>
      </li>
      <li :class="{ 'bg-gray-300': route.path === '/plugin' }">
        <NuxtLink to="/plugin">plugin</NuxtLink>
      </li>
      <li :class="{ 'bg-gray-300': route.path === '/' }">
        <a href="/">server render</a>
      </li>
      <li :class="{ 'bg-gray-300': route.path === '/hello' }">
        <NuxtLink to="/hello">hello</NuxtLink>
      </li>
      <li class="group relative">
        <NuxtLink to="/login/loginGoogle">login</NuxtLink>
        <ul
          class="top-10 left-0 p-2 absolute z-[999] hidden w-[200px] rounded-md border border-gray-200 bg-white shadow-md group-hover:block"
        >
          <li
            class="hover:bg-gray-200"
            :class="getBgClass('/login/googleCredential')"
          >
            <NuxtLink to="/login/googleCredential">login credential</NuxtLink>
          </li>
          <li
            class="hover:bg-gray-200"
            :class="getBgClass('/login/googleAuthToken')"
          >
            <NuxtLink to="/login/googleAuthToken">login token</NuxtLink>
          </li>
          <li
            class="hover:bg-gray-200"
            :class="getBgClass('/login/googleAuthCode')"
          >
            <NuxtLink to="/login/googleAuthCode">login auth code</NuxtLink>
          </li>
        </ul>
      </li>
      <li :class="{ 'bg-gray-300': route.path === '/cookie' }">
        <NuxtLink to="/login/cookie">cookie</NuxtLink>
      </li>
      <li :class="{ 'bg-gray-300': route.path === '/loginJwt' }">
        <NuxtLink to="/login/loginJwt">loginJwt</NuxtLink> <br>
        <NuxtLink to="/login/whoami">whoami</NuxtLink>
      </li>
    </ul>
  </span>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const getBgClass = (path: string) => {
  return {
    'bg-gray-400': route.path === path
  }
}
</script>
