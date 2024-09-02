<script setup lang="ts">
import { usePostsStore } from '~/store/posts'

const postsStore = usePostsStore(); 
</script>

<template>
  <div>
    <Header />
    <Main />
    <Modal v-if="postsStore.showModal" />
  </div>
</template>


