import App from "./App.xht";
import { mount } from 'malinajs/runtime'

import "windi.css";

const target = document.getElementById("app")!;

mount(target, App);
