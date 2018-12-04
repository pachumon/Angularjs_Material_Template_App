import * as angular from "angular";
import "angular-animate";
import "angular-messages";
import "angular-aria";
import * as material from "angular-material";
import "../node_modules/angular-material/layouts/angular-material.layouts.css"
import { mainPageComponent } from "./mainpage.component";
import { UserService } from "./userService";

if (module.hot) {
  module.hot.accept();
}

angular
  .module("contactManagerApp", [material, "ngMessages"])
  .component("mainPage", new mainPageComponent())
  .service("UserService", UserService);
