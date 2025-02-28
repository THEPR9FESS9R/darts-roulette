import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createPinia } from 'pinia'

const app = createApp(App)
const store = createPinia()

app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
})
app.use(store)

app.mount('#app')
