export class mainComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;
  public controllerAs: string;

  constructor() {
    this.bindings = {};
    this.template = "<div>content from component</div>";
    this.controllerAs = "vm";
    this.controller = mainController;
  }
}

class mainController implements ng.IComponentController {
  constructor() {}

  $onInit() {
    console.log("invoked me");
  }
}
