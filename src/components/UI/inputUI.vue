<template>
   <div class="relative">
      <slot />
      <label class="absolute -top-2 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-focus:-translate-y-2 peer-focus:text-gray-600 peer-focus:scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100">
         {{ label }}
      </label>
   </div>

</template>

<script setup>
const props = defineProps({
   type: {type: String, default: 'text'},
   label: {type: String},
})
</script>

<style>
   .no-spin-button::-webkit-inner-spin-button,
   .no-spin-button::-webkit-outer-spin-button {
     -webkit-appearance: none;
     margin: 0;
   }
 
   .no-spin-button {
     -moz-appearance: textfield;
     appearance: textfield;
   }
</style>