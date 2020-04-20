export interface CardTypes {
    auth:string;
    title:string;
    label:string;
    text?:string;
    point?:number;
    size?:( "s"|"m"|"l" ) ;
    direction?:CardDirection;
}

export interface CardSizeTypes {
    s:160,
    m:240,
    l:320
}

export type CardDirection = "row" | "column"