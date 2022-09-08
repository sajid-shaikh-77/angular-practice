import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCeationStatus = 'No Server Was Created';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['Test1', 'Test2', 'Test3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCeateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCeationStatus = 'Server Was Created! Name is ' + this.serverName;
  }
  onCeateUser() {
    this.userName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
