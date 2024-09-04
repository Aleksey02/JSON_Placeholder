<template>
    <main class="py-6">
        <div class="max-w-screen-xl mx-auto">
            <h2 class="text-center text-3xl mb-6">{{ POSTS }}</h2>
            <p v-if="postsStore.getLoading" class="text-center text-3xl mb-6">{{ LOADING }}</p>
            <div v-else class="flex flex-col gap-4 mb-6">
                <Post v-for="post in postsStore.getPosts" :key="post.id" :post="post" />
            </div>
            <Pagination />
        </div>
    </main>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/store/posts' 
import type { State } from '~/store/posts'

const POSTS = 'Посты';
const LOADING = 'Loading...';
const postsStore = usePostsStore() as ReturnType<typeof usePostsStore> & State; 

onMounted(() => {
    postsStore.fetchAllPosts();
})
</script>