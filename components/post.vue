<script lang="ts" setup>
import {ref} from 'vue'
let isShowed = ref(true)
let numb = ref ('line-clamp-3')
let about = ref('развернуть')

function showText():void{
   numb.value === 'line-clamp-3' ? numb.value = 'line-clamp-auto' : numb.value = 'line-clamp-3'
   about.value === 'развернуть' ? about.value = 'свернуть' : about.value = 'развернуть'
}
</script>

<template>
  <div class="bg-zinc-900 shadow-lg opacity-90 max-w-md md:max-w-2xl mx-auto rounded-[20px] pb-4 my-4">
    <div class="mb-4 md:mb-0 w-full max-w-screen-md relative h-96 rounded-lg">
      <div class="absolute left-0 bottom-0 w-full h-full z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1610108702400-b29471f11e76?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-t-[20px]"
      />
      <div class="p-4 absolute bottom-0 left-0 z-20">
        <a
          href="#"
          class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >Укладка</a
        >
        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
          Укладка мужских волос: советы и техники
        </h2>
        <div class="flex mt-3">
          <div>
            <p class="font-semibold text-gray-200 text-sm">Dazzv</p>
            <p class="font-semibold text-gray-400 text-xs">24/04/2024</p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-on:click="showText()"
      class="px-4 lg:px-2 mt-8 text-zinc-200 max-w-screen-md mx-auto text-lg leading-relaxed text-wrap flex flex-col transition-opacity"
    >
    <p :class="{[`${numb}`]:isShowed}" class="transition-all ease-in-out">
      Ухоженная и стильная прическа - важный элемент образа каждого мужчины. Независимо от длины ваших волос, правильная укладка поможет подчеркнуть ваш стиль и самочувствие. 
      <br>Вот несколько полезных советов и техник для идеальной укладки:
      <br> 1️⃣ Помните, что чистые и увлажненные волосы лучше поддаются укладке. Используйте шампунь и кондиционер, подходящие для вашего типа волос, и не забывайте о термозащите перед использованием фена или утюжка. 🧴
      <br>2️⃣ При выборе геля, помады или глины для укладки обращайте внимание на длину ваших волос и желаемый эффект. 
      - Гели подходят для легкой фиксации и объема.
      - Помады придают текстуру и естественный вид (для средней длины), подходят для средней фиксации.
      - Глина подходит для сильной фиксации коротких волос.
      <br> 3️⃣ При укладке волос феном, используйте расческу для создания объема и формы. Направляйте поток воздуха от корней к кончикам для поддержания объема. Для естественного вида воспользуйтесь пальцами, разделяя и структурируя пряди.
      <br> 4️⃣ Финишный штрих: Завершите укладку при помощи лака спрея для фиксации, чтобы сохранить желаемую форму и стиль на долгое время.
      <br>Помните, что уход за волосами - это искусство, которое вы можете освоить с практикой и терпением. Удачи в создании стильных образов!
      <br>🚨 Помните, что чрезмерное использование стайлинга и тепловых инструментов может повредить ваши волосы.
    </p>
      <p class="self-end pr-2 text-sm text-orange-400 opacity-80">{{about}}</p>
    </div>
  </div>
  
  
  <div class="bg-zinc-900 shadow-lg opacity-90 max-w-md md:max-w-2xl mx-auto rounded-[20px] pb-4 my-4">
    <div class="mb-4 md:mb-0 w-full max-w-screen-md relative h-96 rounded-lg">
      <div class="absolute left-0 bottom-0 w-full h-full z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1626201061255-51c25afa69e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-t-[20px]"
      />
      <div class="p-4 absolute bottom-0 left-0 z-20">
        <a
          href="#"
          class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >Уход</a
        >
        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
          Уход за волосами для парней
        </h2>
        <div class="flex mt-3">
          <div>
            <p class="font-semibold text-gray-200 text-sm">Каррт</p>
            <p class="font-semibold text-gray-400 text-xs">21/04/2024</p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-on:click="showText()"
      class="px-4 lg:px-2 mt-8 text-zinc-200 max-w-screen-md mx-auto text-lg leading-relaxed text-wrap flex flex-col transition-opacity"
    >
    <p :class="{[`${numb}`]:isShowed}" class="transition-all ease-in-out">
      Ухоженная и стильная прическа - важный элемент образа каждого мужчины. Независимо от длины ваших волос, правильная укладка поможет подчеркнуть ваш стиль и самочувствие. 
      <br>Вот несколько полезных советов и техник для идеальной укладки:
      <br> 1️⃣ Помните, что чистые и увлажненные волосы лучше поддаются укладке. Используйте шампунь и кондиционер, подходящие для вашего типа волос, и не забывайте о термозащите перед использованием фена или утюжка. 🧴
      <br>2️⃣ При выборе геля, помады или глины для укладки обращайте внимание на длину ваших волос и желаемый эффект. 
      - Гели подходят для легкой фиксации и объема.
      - Помады придают текстуру и естественный вид (для средней длины), подходят для средней фиксации.
      - Глина подходит для сильной фиксации коротких волос.
      <br> 3️⃣ При укладке волос феном, используйте расческу для создания объема и формы. Направляйте поток воздуха от корней к кончикам для поддержания объема. Для естественного вида воспользуйтесь пальцами, разделяя и структурируя пряди.
      <br> 4️⃣ Финишный штрих: Завершите укладку при помощи лака спрея для фиксации, чтобы сохранить желаемую форму и стиль на долгое время.
      <br>Помните, что уход за волосами - это искусство, которое вы можете освоить с практикой и терпением. Удачи в создании стильных образов!
      <br>🚨 Помните, что чрезмерное использование стайлинга и тепловых инструментов может повредить ваши волосы.
    </p>
      <p class="self-end pr-2 text-sm text-orange-400 opacity-80">{{about}}</p>
    </div>
  </div>
</template>


<style scoped>
</style>
