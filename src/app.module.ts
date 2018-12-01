import * as angular from "angular";
import { mainComponent } from "./mainController";

angular
  .module("contactManagerApp", [])
  .component("mainComponent", new mainComponent());
