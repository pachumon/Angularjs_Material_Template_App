import mainTemplate from "./mainpage.component.html";
import { IUserService } from "./userService";
import { User } from "./models";

export class mainPageComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;
  public controllerAs: string;

  constructor() {
    this.bindings = {};
    (this.template = mainTemplate), (this.controllerAs = "vm");
    this.controller = mainPageController;
  }
}

class mainPageController implements ng.IComponentController {
  static $inject = ["$log", "$timeout", "UserService", "$mdSidenav"];
  public name: string;

  constructor(
    private $log: ng.ILogService,
    private $timeout: ng.ITimeoutService,
    private userService: IUserService,
    private $mdSidenav: angular.material.ISidenavService
  ) {
    this.userService.loadAllUsers().then((users: User[]) => {
      console.log(users);
    });
    this.name = "google";
  }

  $onInit() {
    console.log("invoked me");
    this.$timeout(() => {
      this.$log.debug("printed thorugh $log inside $timeout");
    }, 2000);
  }

  users: User[] = [];

  toggleSideNav(): void {
    
    this.$mdSidenav("left").toggle();
  }
}
