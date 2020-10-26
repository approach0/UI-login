import 'babel-polyfill'
import { createApp } from 'vue'
import App from './app.vue'

import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import './customization.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import 'css-doodle'

const app = createApp(App)

import Dialog from 'primevue/dialog'
app.component('Dialog', Dialog)

import Toolbar from 'primevue/toolbar'
app.component('Toolbar', Toolbar)

import InputSwitch from 'primevue/inputswitch'
app.component('InputSwitch', InputSwitch)

import Card from 'primevue/card'
app.component('Card', Card)

import InputText from 'primevue/inputtext'
app.component('InputText', InputText)

import Button from 'primevue/button'
app.component('Button', Button)

app.mount('#app')
