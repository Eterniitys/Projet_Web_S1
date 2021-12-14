import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import "aframe";

const app = createApp({});
app.config.isCustomElement = ["a-scene"];

createApp(App).mount("#app");
