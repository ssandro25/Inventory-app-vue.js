import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/scss/app.css"
import "bootstrap/dist/js/bootstrap"


createApp(App).use(store).mount('#app')


