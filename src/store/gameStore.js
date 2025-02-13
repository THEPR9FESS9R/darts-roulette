import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useGameStore = defineStore('games', () => {
    const games = useLocalStorage('games', [
        '100+',
        '501',
        'Around the Clock',
        'Bullseye Challenge',
        'High Score',
        'Double In Double Out',
    ])
    const amountOfGames = computed(() => games.value.length)

    return {
        games,
        amountOfGames,
    }
})
