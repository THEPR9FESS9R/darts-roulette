<template>
    <div class="flex">
        <div class="relative">
            <div
                class="w-100 h-100 border-2 border-white bg-red rounded-full"
                :style="calculateGradient"
            />
            <div
                class="absolute right-[50%] top-0 translate-x-[50%] -translate-y-[25%] border-[22px] border-b-transparent border-x-transparent border-solid border-t-white"
            />
            <div
                class="absolute right-[50%] top-0 translate-x-[50%] -translate-y-[25%] border-[20px] border-b-transparent border-x-transparent border-solid border-t-red-500"
            />
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'

const calculateGradient = computed(() => {
    return 'background: conic-gradient(red 0% 16.66%, orange 16.66% 33.33%, yellow 33.33% 50%, green 50% 66.66%, blue 66.66% 83.33%, purple 83.33% 100%);'
})
</script>
