import { Entity } from "./entity";


const colors = ["red", "green", "blue", "yellow", "blue", "black"]

export class Circle extends Entity{

    /**
     * instructions for drawing a circle on a canvas
     */
    x: number;
    y:number;
    radius:number;
    ctx: CanvasRenderingContext2D;
    directionX: number;
    directionY: number;
    id: string;
    color: string;

    constructor(x: number, y: number, radius: number, ctx: CanvasRenderingContext2D) {
        super()
        this.id = "aa"
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.ctx = ctx
        this.directionX = Math.random();
        this.directionY = Math.random();
        this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    update(): void {
        this.move(this.x + this.directionX, this.y + this.directionY)
        if(this.x + this.radius > 600 || this.x - this.radius < 0){ 
            this.directionX *= -1
        }
        if(this.y + this.radius >  400 || this.y - this.radius < 0){ 
            this.directionY *= -1
        }
        this.draw()
    }



    draw() {
        this.ctx.beginPath()
        this.ctx.moveTo(this.x + this.radius, this.y)
        this.ctx.strokeStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, 360)        
        
    }

    delete() {
    }

    move(x: number, y: number, radius?: number) {
        if(radius){
            this.radius = radius;
        }
        this.x = x;
        this.y = y;
    }





}