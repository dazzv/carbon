<script lang="ts" setup>
</script>

<template>
  <section class="flex flex-col justify-center items-center relative">
    <DiaryCalendar/>   
    <NuxtLink to="/user/newpost">
      <AddButton/>
    </NuxtLink>
  </section>
</template>
