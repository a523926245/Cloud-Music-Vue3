import { createApp } from 'vue';
import { createPinia } from 'pinia';
import LoginModal from '@component/LoginDialog/index.js';
import App from './App.vue';
import router from './router';

import './assets/style/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(LoginModal);
app.use(router);
app.mount('#app');
