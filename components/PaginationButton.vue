<script setup lang="ts">
const props = defineProps(['click', 'disabled', 'text']);
</script>

<template>
    <button @click="props.click" :disabled="props.disabled" class="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors disabled:bg-gray-300">{{ text }}</button>
</template>


