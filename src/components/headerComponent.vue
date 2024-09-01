<template>
   <header class="w-full flex justify-between items-center px-8 py-4 border-b">
      <img src="/logo.png" alt="Logo" class="h-12">
      <nav class="justify-self-center">
        <span :class="$route.path === '/' ? 'text-gray-800' : 'text-gray-500'" class="hover:text-black">Форма</span>
        <span :class="$route.path === '/data' ? 'text-gray-800' : 'text-gray-500'" class="ml-8 hover:text-black">Превью</span>
      </nav>
      <img src="/logo.png" alt="Logo" class="h-12 opacity-0 hidden xs:block">
    </header>
</template>

<script>

</script>

<style>

</style>