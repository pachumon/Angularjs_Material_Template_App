import * as angularjs from "angular";
import "angular-animate";
import "angular-messages";
import "angular-aria";
import * as material from "angular-material";
import "angular-material-icons"
import { mainPageComponent } from "./mainpage.component";
import { UserService } from "./userService";

if (module.hot) {
  module.hot.accept();
}

angularjs
  .module("contactManagerApp", [material, "ngMessages","ngMdIcons"])
  .component("mainPage", new mainPageComponent())
  .service("UserService", UserService)
  .config(($mdIconProvider:angular.material.IIconProvider)=>{
    $mdIconProvider.icon("menu","../assets/svg/menu.svg",24);
  })
