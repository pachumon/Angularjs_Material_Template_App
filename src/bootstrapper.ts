import * as angularjs from "angular";
import "angular-animate";
import "angular-messages";
import "angular-aria";
import * as material from "angular-material";
import "angular-material-icons";
import { mainPageComponent } from "./components/mainpage.component";
import { sideNavComponent } from "./components/sideNav.component";
import { UserService } from "./shared/services/userService";

if (module.hot) {
  module.hot.accept();
}

angularjs
  .module("contactManagerApp", [material, "ngMessages", "ngMdIcons"])
  .component("mainPage", new mainPageComponent())
  .component("sideNav",new sideNavComponent())
  .service("UserService", UserService)
  .config(
    (
      $mdIconProvider: angular.material.IIconProvider,
      $mdThemingProvider: angular.material.IThemingProvider
    ) => {
      $mdIconProvider
      .defaultIconSet("../assets/svg/avatars.svg",128)
      .icon("menu", "../assets/svg/menu.svg", 24);
      $mdThemingProvider
        .theme("default")
        .primaryPalette("blue")
        .accentPalette("red");
    }
  );
