<script setup lang="ts">
import { usePostsStore } from '~/store/posts' 

const postsStore = usePostsStore();
onMounted(() => {
    postsStore.fetchAllPosts();
})
</script>

<template>
    <main class="py-6">
        <div class="max-w-screen-xl mx-auto">
            <h2 class="text-center text-3xl mb-6">Посты</h2>
            <p v-if="postsStore.loading" class="text-center text-3xl mb-6">Loading...</p>
            <div v-else class="flex flex-col gap-4 mb-6">
                <Post v-for="post in postsStore.posts" :key="post.id" :post="post" />
            </div>
            <Pagination />
        </div>
    </main>
</template>



<style scoped>

</style>