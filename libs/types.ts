export type Tag = {
    id: number,
    name: string,
    color: string,
    icon: string,
    url: boolean //same thing as atribute "picture" in type Product
}

export type Price = {
    price: number,
    size: string
}

export type Product = {
    id: number,
    name: string,
    desc: string,
    prices: Price[],
    picture: string,
    url: boolean, //if true then the picture string will be taken as a url, if false, it will be taken as the name of the .jpeg/.png file in the assets folder
    categories: string[],
    tags: number[],
    rec: boolean,
    caffeine: number,
    sweet: number,
    spicy: number,
    ingredients: string[],
    flavours: string[],
    notes: string
}