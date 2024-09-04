<template>
    <div class="border-2 border-gray-400 px-2 rounded-md">
        <p>
            <span class="font-bold">{{ POST }}</span> 
            №{{ props.post.id }}
        </p>
        <p>
            <span class="font-bold">{{ ID_USER }}</span> 
            {{ props.post.userId }}
        </p>
        <p>
            <span class="font-bold">{{ TITLE }}</span> 
            {{ props.post.title }}
        </p>
        <p>
            <span class="font-bold">{{ DESCRIPTION }}</span> 
            {{ props.post.body }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['post']);
const POST = 'Пост:';
const ID_USER = 'Id пользователя:';
const TITLE = 'Название:';
const DESCRIPTION = 'Описание:';
</script>