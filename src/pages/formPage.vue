<template>
   <wrapperComponent>
      
      <div class="w-full h-full max-w-3xl p-8">
        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-4">Персональные данные</h2>
          <inputUI class="mb-4" :label="'Имя'">
            <input v-model="parentData.name" type="text" placeholder=" " maxlength="20" required class="w-full peer block appearance-none border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 no-spin-button">
         </inputUI>
          <inputUI :label="'Возраст'">
            <input v-model="parentData.age" type="number" placeholder=" " min="0" max="130" required class="w-full peer block appearance-none border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 no-spin-button">
         </inputUI>
        </div>
  
        <div class="mb-8">
         <div class="flex flex-row items-center w-full justify-between mb-4">
            <h2 class="text-base xs:text-lg font-semibold">Дети (макс. 5)</h2>
            <buttonUI @click="kids.push({name: '', age: null})" :disabled="kids.length > 4">
               <span class="text-sm xs:text-base font-semibold">+ Добавить ребенка</span>
            </buttonUI> 
         </div>
          <div v-for="(kid, index) in kids" :key="index" class="flex mb-4 space-x-4">
            <inputUI :label="'Имя'" class="w-full">
               <input v-model="kid.name" type="text" placeholder=" " maxlength="20" required class="w-full peer block appearance-none border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 no-spin-button">
            </inputUI>
            <inputUI :label="'Возраст'" class="w-full">
               <input v-model="kid.age" type="number" placeholder=" " min="0" max="18" required class="w-full peer block appearance-none border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 no-spin-button">
            </inputUI>
            <buttonUI @click="kids.splice(index, 1)" class="border-none">Удалить</buttonUI>
          </div>
        </div>
  
        <buttonUI :filled="true" @click="saveData">Сохранить</buttonUI>
      </div>

      <p class="font-semibold text-red-500 text-xl" v-if="error">Ошибка! Заполните все поля правильно</p>

   </wrapperComponent>
</template>

<script setup>
import wrapperComponent from '../components/wrapperComponent.vue';
import buttonUI from '../components/UI/buttonUI.vue'
import inputUI from "../components/UI/inputUI.vue";
import { ref, reactive } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter()
const parentData = reactive({
   name: '', age: null
})
const kids = ref([])
const error = ref(false)

function saveData(){
   let isKidsValid = true;
   error.value = false

   if(kids.value.length > 0){
      for (let kid of kids.value){
         isKidsValid = Object.values(kid).every(value => value?.toString().trim().length > 0)
      }
   }
   const isInputsValid = [
      Object.values(parentData).every(value => value?.toString().trim().length > 0),
      isKidsValid
   ]

   if(isInputsValid.every(val => val)){
      localStorage.setItem('parentData', JSON.stringify(parentData))
      localStorage.setItem('kidsData', JSON.stringify(kids.value))
      return router.push('/data')
   } else {
      error.value = true
      setTimeout(() => {
         error.value = false
      }, 3000);
   }
}
</script>

<style>

</style>