import { createApp } from "vue";
import "../src/assets/style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
