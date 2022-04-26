


export abstract class Entity {

    abstract x: number;
    abstract y: number;
    abstract id: string;
    abstract color: string;
    content: string[] = [];
    
    // create a new draw an instance of this entity
    abstract draw(): void;

    //remove the old version of the entity and redraw in the new location
    abstract move(x: number, y:number): void;

    // delete this entity from the canvas (erases the drawing)
    abstract delete(): void;

    abstract update(): void;
}