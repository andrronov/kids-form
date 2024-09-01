<template>
   <button :class="filled ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-blue-500 border-blue-500 hover:bg-blue-100'" class="flex items-center border rounded-full px-4 py-2 disabled:text-gray-500">
      <slot />
    </button>
</template>

<script setup>
const props = defineProps({
   filled: {type: Boolean, default: false}
})
</script>

<style>

</style>