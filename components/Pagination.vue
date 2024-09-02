<script setup lang="ts">
import { usePostsStore } from '~/store/posts'

const postsStore = usePostsStore();


const nextPage = (): void => {
  if (postsStore.page < postsStore.totalPages) {
    postsStore.nextPage();
  }
};
const prevPage = (): void => {
  if (postsStore.page > 1) {
    postsStore.prevPage();
  }
};
</script>

<template>
    <div class="flex justify-center gap-4 items-center">
      <PaginationButton :click="prevPage" :disabled="postsStore.page === 1" :text="'Prev'"></PaginationButton>
      <span>Page {{ postsStore.page }}/{{ postsStore.totalPages }}</span>
      <PaginationButton :click="nextPage" :disabled="postsStore.page === postsStore.totalPages" :text="'Next'"></PaginationButton>
    </div>
</template>

