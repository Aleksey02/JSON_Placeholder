<template>
  <header class="bg-black py-6">
    <div class="max-w-screen-xl mx-auto flex justify-between">
      <h1 class="text-white text-xl font-bold">{{ TITLE }}</h1>
      <div class="flex gap-4">
        <button :class="buttonClasses" @click="postsStore.sortPosts">{{ BUTTON_SORT }}</button>
        <button :class="buttonClasses" @click="postsStore.toggleModal">{{ BUTTON_ADD }}</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/posts'
import type { State } from '~/store/posts'

const buttonClasses = 'bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition-colors';
const BUTTON_SORT = 'Сортировать';
const BUTTON_ADD = 'Добавить пост';
const TITLE = '{JSON} Placeholder';
const postsStore = usePostsStore() as ReturnType<typeof usePostsStore> & State; 
</script>
