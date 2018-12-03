import * as angular from "angular";
import { mainPageComponent } from "./mainpage.component";

if (module.hot) {
  module.hot.accept();
}

angular
  .module("contactManagerApp", [])
  .component("mainPage", new mainPageComponent());
