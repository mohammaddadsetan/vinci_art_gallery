import { promises } from "dns";
import { resolve } from "path";
import michel from './img/michelangelodavid4.png'
import michel2 from './img/michelangelodavid2.jpg'
export type Product = {
    title: string
    img: any,
    typ: string

}


const Products: Product[] = [
    { title: "van gogh", img:  michel , typ: "paints" },
    { title: "da vinci", img:michel2, typ: "paints" },
    { title: "jac david", img:  michel , typ: "paints" },
    { title: "picasso", img:michel2, typ: "paints" },
    { title: "farshchian", img:  michel , typ: "paints" },
    { title: "kamalolmolk", img:michel2, typ: "paints" },
    { title: "salvador dali", img:  michel , typ: "paints" },
    { title: "michelangelo", img:michel2, typ: "paints" },
    { title: "rembrandt", img:  michel , typ: "paints" },
    { title: "munch", img:michel2, typ: "paints" },
    { title: "cezanne", img:  michel , typ: "paints" },
    { title: "monet", img:michel2, typ: "paints" },
    { title: "raphael", img:  michel , typ: "paints" },
    { title: "matisse", img:michel2, typ: "paints" },
    { title: "pollock", img:  michel , typ: "paints" },
];

export default function fetchProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        resolve(Products);

    });

}




