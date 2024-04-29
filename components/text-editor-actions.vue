<script setup lang="ts">
const save = () => {   
    const EditedText = document.querySelector('.textEditor');

    if (EditedText) {
        const finishedText = document.createElement('p');
        finishedText.className = "content__text";
        finishedText.innerHTML = EditedText.innerHTML; // Устанавливаем содержимое div равным содержимому .textEditor
        
        // Добавляем в дом
        const outerText = document.querySelector('.outerText')
        outerText?.append(finishedText)
    }

}
</script>

<template>
  <div class="textEditorActionBar">
    <button onclick="document.execCommand('bold');">bold</button>
    <button onclick="document.execCommand('italic');">italic</button>
    <button onclick="document.execCommand('justifyCenter');">Center</button>
    <button onclick="document.execCommand('justifyLeft');">Left</button>
    <button onclick="document.execCommand('underline');">line</button>

    <button @click="save()">Save</button>
  </div>
</template>

<style scoped>
.textEditorActionBar button {
  padding: 7px 10px;
  border: 1px solid #333;
}
</style>
