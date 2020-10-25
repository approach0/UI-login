import 'babel-polyfill'
import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar';
import InputText from 'primevue/inputtext';
app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Toolbar', Toolbar)
app.component('InputText', InputText)

import './background.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

app.mount('#app')
