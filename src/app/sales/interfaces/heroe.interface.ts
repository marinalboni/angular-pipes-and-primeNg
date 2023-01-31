export enum Color {
    red, black, blue, green
}

export interface Heroe {
    [x: string]: any;
    name: string,
    fly: boolean,
    color: Color
}