import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.scss';
import App from './App.vue';
import PhosphorVue from "phosphor-vue";
import * as bootstrap from 'bootstrap';

createApp(App)
.use(createPinia())
.use(PhosphorVue)
.mount("#app");