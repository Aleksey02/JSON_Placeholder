<script setup lang="ts">
import { ref } from 'vue';
import { usePostsStore } from '~/store/posts'

const addPost = (): void => {
    if(title.value.length>0 && desc.value.length>0){
        postsStore.addPost(title.value, desc.value);
        postsStore.showModal = false;
        title.value = '';
        desc.value = '';
    }else{
        alert('Заполните все поля');
    }
}

const title = ref('');
const desc = ref('')
const postsStore = usePostsStore();

</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <form class="bg-white p-4 rounded w-1/2" @submit.prevent="addPost">
            <div class="flex flex-col">
                <label for="title">Название:</label>
                <input type="text" name="title" id="title" class="border-2 rounded p-2 outline-none" v-model.trim="title">
            </div>
            <div class="flex flex-col">
                <label for="description">Описание:</label>
                <textarea name="description" id="description" class="border-2 rounded p-2 resize-none min-h-[300px] outline-none mb-4" v-model.trim="desc" />
            </div>
            <div class="flex justify-end gap-4">
                <button class="bg-gray-300 py-2 px-6 rounded hover:bg-gray-200 transition-colors" @click="postsStore.showModal = false">Отмена</button>
                <button class="bg-blue-400 text-white py-2 px-6 rounded hover:bg-blue-200 transition-colors" type="submit">Добавить</button>
            </div>
        </form>
    </div>
</template>

