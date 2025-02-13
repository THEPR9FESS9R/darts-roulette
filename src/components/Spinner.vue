<template>
    <div class="flex mb-4">
        <div class="relative">
            <div
                class="w-100 h-100 border-2 border-white bg-red rounded-full transition-transform duration-500 ease-in-out"
                :style="[calculateGradient, `transform: rotate(${rotate}deg);`]"
            />
            <div
                class="absolute right-[50%] top-0 translate-x-[50%] -translate-y-[25%] border-[22px] border-b-transparent border-x-transparent border-solid border-t-white"
            />
            <div
                class="absolute right-[50%] top-0 translate-x-[50%] -translate-y-[25%] border-[20px] border-b-transparent border-x-transparent border-solid border-t-red-500"
            />
        </div>
    </div>
    <Button class="mb-6" @click="spin">SPIN</Button>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useGameStore } from '../store/gameStore'
import { storeToRefs } from 'pinia'
import Button from 'primevue/button'

const { amountOfGames, games } = storeToRefs(useGameStore())
const emit = defineEmits(['selected:game'])
const rotate = ref(5)
const calculateGradient = computed(() => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    const gradient = []
    for (let i = 0; i < amountOfGames.value; i++) {
        gradient.push(
            `${colors[i]} ${(i * 100) / amountOfGames.value}% ${((i + 1) * 100) / amountOfGames.value}%`,
        )
    }

    console.log(`conic-gradient(${gradient.join(', ')});`)

    return `background: conic-gradient(${gradient.join(', ')});`
})

function spin() {
    const random = Math.floor(Math.random() * amountOfGames.value)

    console.log(games.value[random])

    const randomSpins = Math.floor(Math.random() * 10) + amountOfGames.value * 2
    rotate.value += 360 * randomSpins + (360 / amountOfGames.value) * random

    setTimeout(() => {
        emit('selected:game', games.value[random])
    }, 5000)
}
</script>
