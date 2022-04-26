import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../player/enities/entity';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() entities: {[entityId: string]: Entity;};
  constructor() { }

  ngOnInit(): void {
    console.log(this.entities)
  }

  deleteEntity(entityId: string) {
    delete this.entities[entityId];
  }

}
