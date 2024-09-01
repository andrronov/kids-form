<template>
  <wrapperComponent>
    <div class="text-center">
      <h1 class="font-medium mb-6 text-lg">Персональные данные</h1>
      <p class="font-bold">{{ parent.name }}, {{ parent.age }} лет</p>
    </div>
    <div>
      <h1 class="font-medium mb-6 text-lg text-center">Дети</h1>
      <div class="flex flex-col items-center gap-4">
        <p class="font-bold p-2 bg-gray-200 rounded-lg" v-for="(kid, index) in kids" :key="index">{{ kid.name }}, {{ kid.age }} лет</p>
      </div>
    </div>

    <ButtonUI class="text-red-500 border-red-500 hover:bg-red-100" @click="deleteData">Удалить данные и вернуться на главную</ButtonUI>
  </wrapperComponent>
</template>

<script setup>
import wrapperComponent from "../components/wrapperComponent.vue";
import ButtonUI from "../components/UI/buttonUI.vue";
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const parent = computed(() => JSON.parse(localStorage.getItem('parentData')))
const kids = computed(() => JSON.parse(localStorage.getItem('kidsData')))

function deleteData(){
  localStorage.clear()
  router.push('/')
}
</script>

<style></style>
