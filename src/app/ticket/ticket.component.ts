import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() header: string;
  @Input() bodyLines: string[];
  constructor() {
   }

  ngOnInit(): void {
  }

}
