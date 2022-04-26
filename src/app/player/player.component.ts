import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Circle } from './enities/circle';
import { Rectangle } from './enities/rectangle';
import { Entity } from './enities/entity';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D
  @Input() entities: {[entityId: string]: Entity;};
  protected lastIsCircle: boolean = false;
  protected entityId: number = 0;

  @ViewChild('videoAnnotator') private annotator: ElementRef
  constructor() { }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    console.log(this.annotator)
    this.canvas = this.annotator.nativeElement;
    this.ctx = this.canvas.getContext("2d")
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath()
      for(let i in this.entities){
        this.entities[i].update();
        this.ctx.stroke();
      }
    })
  }

  newCircleOnClick(event: PointerEvent){

    let x = event.x;
    let y = event.y;
    this.entities[this.entityId.toString()] = new Circle(x, y, 10, this.ctx)
  }

  newRectangleOnClick(event: PointerEvent){

    let x = event.x;
    let y = event.y;

    this.entities[this.entityId.toString()] = new Rectangle(x, y, 10, 10, this.ctx)
  }

  onClick(event: PointerEvent){
    if (this.lastIsCircle)
    {
      this.newRectangleOnClick(event);
    }
    else
    this.newCircleOnClick(event);
    this.lastIsCircle = !this.lastIsCircle; 
    this.entityId += 1;
  }

  
}
