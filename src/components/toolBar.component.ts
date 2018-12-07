import toolBarTemplate from "./toolBar.component.html";

export class toolBarComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;
  public controllerAs: string;

  constructor() {
    this.bindings = {
      toggleSideNav: "&"
    };
    (this.template = toolBarTemplate), (this.controllerAs = "vm");
    this.controller = toolBarController;
  }
}

class toolBarController implements ng.IComponentController {
  static $inject = ["$log"];
  toggleSideNav: any;

  constructor(private $log: ng.ILogService) {}

  $onInit() {}

  toggleAppSideNav() {
    this.toggleSideNav();
  }
}
