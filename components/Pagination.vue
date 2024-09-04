<template>
    <div class="flex justify-center gap-4 items-center">
      <PaginationButton :click="prevPage" :disabled="postsStore.getCurrentPage === 1" :text="'Prev'"></PaginationButton>
      <span>Page {{ postsStore.getCurrentPage }}/{{ postsStore.getTotalPages }}</span>
      <PaginationButton :click="nextPage" :disabled="postsStore.getCurrentPage === postsStore.getTotalPages" :text="'Next'"></PaginationButton>
    </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/store/posts'
import type { State } from '~/store/posts'

const postsStore = usePostsStore() as ReturnType<typeof usePostsStore> & State; 

const nextPage = (): void => {
  if (postsStore.getCurrentPage < postsStore.getTotalPages) {
      postsStore.startLoading();
      postsStore.incrementPage();
      postsStore.updatePosts();
        setTimeout(() => {
          postsStore.endLoading();
        },300)
  }
};
const prevPage = (): void => {
  if (postsStore.getCurrentPage > 1) {
    postsStore.startLoading();
    postsStore.decrementPage();
    postsStore.updatePosts();
        setTimeout(() => {
          postsStore.endLoading();
        },300)
      }
}

</script>