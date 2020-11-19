import "@babel/polyfill";
import { registerLocale } from 'react-datepicker'
import th from "date-fns/locale/th";
registerLocale("th", th);
import { createElement } from "react";
import { render } from "react-dom";
import App from "./App";
import './bootstrap-theme.css';
import '../node_modules/react-datepicker/dist/react-datepicker.min.css'
import './app.css';

//for rebase
const bootstrap = () => {
  const mountPoint = document.getElementById("root");
  render(createElement(App), mountPoint);
};
bootstrap();

