import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() header: string;
  @Input() bodyLines: string[];
  @Output() selfDeleteEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
   }

  ngOnInit(): void {
  }

  deleteEntity() {
    console.log(this.header)
    this.selfDeleteEvent.emit(this.header)
  }

}
