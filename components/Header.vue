<script lang="ts" setup>
import { usePostsStore } from '~/store/posts'

const postsStore = usePostsStore();
</script>

<template>
  <header class="bg-black py-6">
    <div class="max-w-screen-xl mx-auto flex justify-between">
      <h3 class="text-white text-xl font-bold">{JSON} Placeholder</h3>
      <div class="flex gap-4">
        <button class="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition-colors" @click="postsStore.sortPosts">Сортировать</button>
        <button class="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded transition-colors" @click="postsStore.showModal = true">Добавить пост</button>
      </div>
    </div>
  </header>
</template>
