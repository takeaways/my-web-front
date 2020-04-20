export interface CardTypes {
    readonly auth:string;
    readonly title:string;
    readonly label:string;
    readonly text?:string;
    readonly point?:number;
    readonly size?:( "s"|"m"|"l" ) ;
    readonly direction?:CardDirection;
}

export interface CardSizeTypes {
    s:160,
    m:240,
    l:320
}

export type CardDirection = "row" | "column"