<template>
    <div>
        <Main />
        <Modal v-if="postsStore.isModalOpen" />
    </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/store/posts'
import type { State } from '~/store/posts'

const postsStore = usePostsStore() as ReturnType<typeof usePostsStore> & State; 
</script>

