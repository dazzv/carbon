<script setup lang="ts">
// onMounted(() => {
    // const EditedText = document.querySelector('.textEditor');

    interface post {
        title: string,
        username?: string,
        text?: string
    }
    const postText: post = {
        title: '',
        // text: EditedText?.innerHTML,
    }
// })






//   if (EditedText) {
//     const finishedText = document.createElement('p');
//     finishedText.className = "content__text";
//     finishedText.innerHTML = EditedText.innerHTML; // Устанавливаем содержимое div равным содержимому .textEditor

// Добавляем в дом
// const outerText = document.querySelector('.outerText')
// outerText?.append(finishedText)
//   }


</script>

<template>
    <div class="mx-auto max-w-md md:max-w-2xl flex flex-col">
        <input class="pb-4 outline-none text-gray-200 bg-zinc-900 placeholper-gray-500 text-3xl" :value="postText.title"
            type="text" placeholder="Заголовок">
        <p class="pb-4 outline-none text-gray-500 text-small">Username</p>
        <text-editor-actions class="flex justify-end" />
        <text-editor />
    </div>
</template>