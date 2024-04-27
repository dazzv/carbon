<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue'

const hideMenuBlock = ref(false)
const defaultOffset:number = 200; // Точка после которой скрываем меню
const lastScroll = ref(0); // Последная позиция скролла
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop; // Позиция скролла

const handleScroll = () => {      
  if (scrollPosition() > lastScroll.value && scrollPosition() > defaultOffset) {
    // Scroll down
    hideMenuBlock.value = true;
  } else if (scrollPosition() < lastScroll.value) {
    // Scroll up
    hideMenuBlock.value = false;
  }

  lastScroll.value = scrollPosition();    
};

onMounted(() => {
  //Скрываем меню при мобильном приложение
  const screenWidth = ref(window.innerWidth);
  if (screenWidth.value < 500) {
    window.addEventListener('scroll', handleScroll);
  }
})

onUnmounted(() => {
  // Cleanup function to remove the event listener
  window.removeEventListener('scroll', handleScroll);
})

</script>

<template>
    <header
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-screen sm:h-screen sm:w-28 lg:w-72 p-4 transition-transform bg-zinc-900 opacity-95 sm:opacity-100 border-r-0 sm:border-r-2 border-r-zinc-800 text-gray-300 font-bold flex flex-row sm:flex-col justify-between"
      aria-label="Sidebar"
    >
      <div class="logo self-center">
        <nuxt-link to="/" class="flex items-center sm:max-lg:scale-125 sm:max-lg:mt-2">
          <img src="~assets\img\logo.png" alt="logo_img" class="w-12">
          <span class="ms-3 text-base sm:text-xl text-white sm:max-lg:hidden">Carbon Hairstyle</span>
        </nuxt-link>
      </div>
      <nav  :class="{'translate-y-full': hideMenuBlock}" class="transition-transform text-base sm:max-lg:self-center fixed bottom-0 left-0 sm:static border-t-2 border-t-zinc-800 sm:border-t-0 bg-zinc-900">
        <ul class="sm:space-y-2 font-medium flex items-center justify-between w-screen p-2 sm:p-0 sm:block sm:w-full">
          <li>
            <nuxt-link to="/" class="flex items-center p-4 rounded-lg hover:bg-zinc-800 active:bg-zinc-800 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 scale-125 sm:max-lg:scale-150 lg:scale-100">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 hidden lg:block">Полезное</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/line" class="flex items-center p-4 rounded-lg hover:bg-zinc-800 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-orange-500 scale-125 sm:max-lg:scale-150 group-focus:text group-focus:text-orange-500 lg:scale-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 hidden lg:block">Лента комьюнити</span>
            </nuxt-link> 
            
          </li>
          <li>
            <nuxt-link to="/diary" class="flex items-center p-4 rounded-lg hover:bg-zinc-800 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 scale-125 sm:max-lg:scale-150 lg:scale-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 hidden lg:block">Дневник</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/support" class="flex items-center p-4 rounded-lg hover:bg-zinc-800 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 scale-125 sm:max-lg:scale-150 lg:scale-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 hidden lg:block">Поддержка</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="flex items-center p-4 rounded-lg hover:bg-zinc-800 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 scale-125 sm:max-lg:scale-150 lg:scale-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 hidden lg:block">О проекте</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="flex">
        <nuxt-link to="/profile" class="flex items-center p-2 rounded-lg hover:bg-zinc-800 group">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 max-lg:scale-125">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>

        <nuxt-link class="flex items-center p-2 rounded-lg hover:bg-zinc-800 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-orange-500 group-focus:text group-focus:text-orange-500 max-lg:scale-125">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </nuxt-link>
      </div>

    </header>
    <slot>This is where individual page contents will be rendered.</slot>
    <!-- <footer>footer</footer> -->
</template>
