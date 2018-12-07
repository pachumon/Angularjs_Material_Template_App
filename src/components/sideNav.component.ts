import sideNavTemplate from "./sideNav.component.html";
import { User } from "src/models/models";
import Event from '../models/Event'

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
    this.controller = sideNavController;
  }
}

class sideNavController implements ng.IComponentController {
  static $inject = ["$log"];
  selectUser: any;

  constructor(private $log: ng.ILogService) {}

  $onInit() {
   
  }

  selectSideNavUser(user: User): void {
    this.selectUser(new Event({ data: user }));
  }
}


