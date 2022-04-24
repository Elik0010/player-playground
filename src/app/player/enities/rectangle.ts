import { Entity } from "./entity";
import { Circle } from "./circle";


export class Rectangle extends Circle {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number, ctx: CanvasRenderingContext2D){
        super(x, y, 1, ctx);
        this.width = width;
        this.height = height;
    }

    draw(): void {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineTo(this.x + this.width, this.y);
        this.ctx.lineTo(this.x + this.width, this.y + this.height);
        this.ctx.lineTo(this.x, this.y + this.height);
        this.ctx.lineTo(this.x, this.y);
    }

    move(x: number, y: number, width?: number, height?: number) {
        if(width){
            this.width = width;
        }
        if(height){
            this.height = height;
        }
        this.x = x;
        this.y = y;
    }
}