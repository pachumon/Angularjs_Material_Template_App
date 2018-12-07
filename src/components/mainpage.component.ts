import mainTemplate from "./mainpage.component.html";
import { IUserService } from "../shared/services/userService";
import { User, Note } from "../models/models";

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
  static $inject = [
    "$log",
    "$timeout",
    "UserService",
    "$mdSidenav",
    "$mdToast"
  ];

  constructor(
    private $log: ng.ILogService,
    private $timeout: ng.ITimeoutService,
    private userService: IUserService,
    private $mdSidenav: angular.material.ISidenavService,
    private $mdToast: angular.material.IToastService
  ) {}

  $onInit() {
    this.userService.loadAllUsers().then((users: User[]) => {
      console.log(users);
      this.users = users;
      this.selected = users[0];
    });
  }

  users: User[] = [];
  selected: User = null;
  searchtext: string = "";
  tabIndex: number = 0;
  toggleSideNav(): void {
    this.$mdSidenav("left").toggle();
  }

  selectUser(user: User): void {
    console.log(user);
    this.selected = user.data;
    
    this.tabIndex = 0;
    var sidenav = this.$mdSidenav("left");
    if (sidenav.isOpen()) {
      sidenav.close();
    }
  }

  removeNote(note: Note) {
    var foundIndex = this.selected.notes.indexOf(note);
    this.selected.notes.splice(foundIndex, 1);
  }
}
