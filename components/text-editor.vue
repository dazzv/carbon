<script setup lang="ts">
import { defineEmits } from 'vue';

const updateHTML = (e: MouseEvent) => {
  emit('input', (e.target as HTMLElement).innerHTML);
};

const hideInput = ref(false)

const emit = defineEmits();
</script>

<template>
  <section>
    <div @input="event => updateHTML" contenteditable="true" class="textEditor cursor-text border-none text-gray-200 outline-none w-full h-screen" placeholder="Ваша история..." data-placeholder="Ваша история...">
    </div>
  </section>
</template>

<style scoped>
.textEditor:empty:before {
  content:attr(data-placeholder);
  color:gray
}
</style>