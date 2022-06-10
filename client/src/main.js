import { createApp } from 'vue'
import router from './router'
import App from './App.vue'


//Vue.use(Router)
createApp(App).use(router).mount(`#app`);