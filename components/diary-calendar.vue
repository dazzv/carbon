<script lang='ts' setup>
let days = ref('0')
// let startDate = new Date() // получаем из бд
let period = ref('дней')
const buttonText = ref('Начать отсчет')

// Функция для обновления счетчика на основе разницы между датами
// const updateCounter = () => {
//     const currentDate = new Date();
//     const diffTime = Math.abs(currentDate.getTime() - new Date(startDate).getTime());
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     days.value = diffDays
// }

const startStopСounting = () => {
  days.value = '1'
 
  if(days){
  const last:number = days.value.length - 1
  const daysLastNumb = days.value[last]

  daysLastNumb !== '0' ? period.value = 'день' : period.value = 'дней'
  buttonText.value === 'Начать отсчет' ? buttonText.value = "Остановить" : buttonText.value = 'Начать отсчет';
}}

// onMounted(() => {
  // updateCounter()
// })

</script>

<template>
    <section class="flex flex-col items-center max-w-2xl">
      <h1 class="text-9xl mb-2">{{ days }}</h1>
      <p class="text-3xl">{{ period }}</p>
      <button type="button" @click="startStopСounting" class="my-7 mx-0 focus:outline-none text-white bg-gray-500 hover:bg-gray-700 active:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5">{{buttonText}}</button>
    </section>
</template>