import { Component, OnInit } from '@angular/core';

/**
 *   template: `
 *     <app-server></app-server>
 *     <app-server></app-server>
 *     <app-server></app-server>`,
 */
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
