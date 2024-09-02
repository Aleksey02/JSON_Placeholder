<script setup lang="ts">
const props = defineProps(['post']);
</script>


<template>
    <div class="border-2 border-gray-400 px-2 rounded-md">
        <p>
            <span class="font-bold">Пост:</span> 
            №{{ props.post.id }}
        </p>
        <p>
            <span class="font-bold">Id пользователя:</span> 
            {{ props.post.userId }}
        </p>
        <p>
            <span class="font-bold">Название:</span> 
            {{ props.post.title }}
        </p>
        <p>
            <span class="font-bold">Описание:</span> 
            {{ props.post.body }}
        </p>
    </div>
</template>

