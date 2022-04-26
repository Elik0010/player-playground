import { Component } from '@angular/core';
import { Entity } from './player/enities/entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'eva-first';
  entities: {[entityId: string]: Entity;}= {};
}
