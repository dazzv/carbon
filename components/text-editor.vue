<template>
    <div @input="event => updateHTML" contenteditable="true" class="textEditor placeholder:text-gray-400 cursor-text p-2 border-none outline-none w-full" placeholder="Ваша история..."></div>
    <div class="outerText"></div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const updateHTML = (e: MouseEvent) => {
  emit('input', (e.target as HTMLElement).innerHTML);
};


const emit = defineEmits();

</script>
  <style scoped>


  </style>