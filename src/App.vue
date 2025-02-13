<template>
    <div class="h-full w-full flex flex-col items-center text-white">
        <Menubar :model="items" class="w-full" />
        <div class="flex flex-col items-center text-white p-4 pt-8 w-full">
            <div class="mb-8">Runde: {{ amountOfGamesPlayed }}/6</div>
            <div class="mb-8">Spiel: {{ currentGame }}</div>

            <Spinner class="mb-6" @selected:game="onGameSelect" />

            <div class="flex w-full">
                <div class="basis-1/2 flex items-center flex-col gap-8">
                    <InputText v-model="playerName1" />
                    Punkte: {{ player1Points }}
                    <Button class="mb-6" @click="winning(1)"
                        >Spieler 1 gewinnt</Button
                    >
                </div>
                <div class="basis-1/2 flex items-center flex-col gap-8">
                    <InputText v-model="playerName2" />
                    Punkte: {{ player2Points }}
                    <Button class="mb-6" @click="winning(2)"
                        >Spieler 2 gewinnt</Button
                    >
                </div>
            </div>
        </div>
        <Dialog
            v-model:visible="showSettings"
            modal
            header="Spieleinstellungen"
            :style="{ width: '50rem' }"
        >
            <div class="flex flex-col gap-4">
                <div
                    v-for="game in gameStore.games"
                    :key="game"
                    class="flex items-center gap-2"
                >
                    <Checkbox
                        v-model="gameStore.games"
                        :inputId="game"
                        name="category"
                        :value="game"
                    />
                    <label :for="game">{{ game }}</label>
                </div>
            </div>
        </Dialog>
    </div>
</template>
<script setup>
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import Spinner from './components/Spinner.vue'
import { useGameStore } from './store/gameStore'

const gameStore = useGameStore()
const showSettings = ref(false)
const amountOfGamesPlayed = ref(1)
const currentGame = ref('')
const playerName1 = ref('Spieler 1')
const playerName2 = ref('Spieler 2')
const player1Points = ref(0)
const player2Points = ref(0)

const items = ref([
    {
        label: 'Neues Spiel',
        icon: 'pi pi-replay',
        command: () => {
            player1Points.value = 0
            player2Points.value = 0
            amountOfGamesPlayed.value = 1
            currentGame.value = ''
        },
    },
    {
        label: 'Einstellungen',
        icon: 'pi pi-cog',
        command: () => {
            showSettings.value = true
        },
    },
])

function winning(player) {
    if (player === 1) {
        player1Points.value++
    } else {
        player2Points.value++
    }

    amountOfGamesPlayed.value++
}

function onGameSelect(game) {
    console.log(game)
    currentGame.value = game
}
</script>
