import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import { store } from "./store/index";
import { i18n } from "./../i18n";

// Add tailwindcss
import "./assets/styles/main.css";

// Create the app
let app = createApp(App);

// Setup Vue to use the Vue-Router
app.use(router);

// Setup Vue to use the Vuex store
app.use(store);

// Setup Vue to use I18n
app.use(i18n);

// Mount the app
app.mount("#app");
