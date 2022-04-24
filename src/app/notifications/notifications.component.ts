import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  tickets = [
    {header: "number 1", body: ["1 line 1", "1 line 2", "1 line 3"]},
    {header: "number 2", body: ["2 line 1", "2 line 2", "2 line 3"]},
    {header: "number 3", body: ["3 line 1", "3 line 2", "3 line 3"]},
    {header: "number 4", body: ["4 line 1", "4 line 2", "4 line 3"]}
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.tickets)
  }

}
