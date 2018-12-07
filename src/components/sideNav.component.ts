import sideNavTemplate from "./sideNav.component.html";
import { User } from "src/models/models";

export class sideNavComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;
  public controllerAs: string;

  constructor() {
    this.bindings = {
      searchText: "<",
      users: "<",
      selected: "<",
      selectUser: "&"
    };
    (this.template = sideNavTemplate), (this.controllerAs = "vm");
    this.controller = mainPageController;
  }
}

class mainPageController implements ng.IComponentController {
  static $inject = ["$log"];
  selectUser: any;

  constructor(private $log: ng.ILogService) {}

  $onInit() {
    console.log(this);
  }

  selectSideNavUser(user: User): void {
    this.selectUser(new Event({ data: user }));
  }
}

export class Event {
  constructor(public $event: any) {}
}
