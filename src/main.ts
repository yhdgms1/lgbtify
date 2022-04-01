import App from "./App.xht";
import "windi.css";

const target = document.getElementById("app");
const app = App();

target && target.appendChild(app.$dom);
