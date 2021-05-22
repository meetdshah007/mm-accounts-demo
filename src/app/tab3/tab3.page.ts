import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  date = new Date();

  constructor() {}

  onLogout() {
    // todo: logic to logout and redirection to login page.
  }
}
