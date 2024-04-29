<script lang="ts" setup>
const showEditor = ref(false);
</script>

<template>
  <section class="flex flex-col justify-center items-center relative">
    <TextEditorActions v-show="showEditor"/> 
    <TextEditor v-show="showEditor"/>
    <DiaryCalendar v-show="!showEditor"/>   
    <AddButton @click="showEditor = !showEditor" v-show="!showEditor"/> 
    <SaveButton @click="showEditor = !showEditor" v-show="showEditor"/>
  </section>
</template>
