namespace ContactManagerApp {
  "use strict";

  export class mainController {
    static $inject: Array<string> = [];
    constructor() {}
    vm = this;
    message: string = "this is my message";
  }

  angular
    .module("contactManagerApp")
    .controller("mainController", mainController);
}
