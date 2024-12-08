import { promises } from "dns";
import { resolve } from "path";
import michel from './img/michelangelodavid4.png'
import michel2 from './img/michelangelodavid2.jpg'
export type ProductTyp = {
    id: number,
    title: string
    img: any,
    typ: string


}


const Products: ProductTyp[] = [
    { id: 0, title: "vangogh", img: michel, typ: "paints" },
    { id: 1, title: "da vinci", img: michel2, typ: "paints" },
    { id: 2, title: "jac david", img: michel, typ: "paints" },
    { id: 3, title: "picasso", img: michel2, typ: "paints" },
    { id: 4, title: "farshchian", img: michel, typ: "paints" },
    { id: 5, title: "kamalolmolk", img: michel2, typ: "paints" },
    { id: 6, title: "salvador dali", img: michel, typ: "paints" },
    { id: 7, title: "michelangelo", img: michel2, typ: "paints" },
    { id: 8, title: "rembrandt", img: michel, typ: "paints" },
    { id: 9, title: "munch", img: michel2, typ: "paints" },
    { id: 10, title: "cezanne", img: michel, typ: "paints" },
    { id: 11, title: "monet", img: michel2, typ: "paints" },
    { id: 12, title: "raphael", img: michel, typ: "paints" },
    { id: 13, title: "matisse", img: michel2, typ: "paints" },
    { id: 14, title: "pollock", img: michel, typ: "paints" },
];

export function fetchProducts(): Promise<ProductTyp[]> {
    return new Promise((resolve) => {
        resolve(Products);

    });

}


export function fetchProduct(categoryInput:string, inputId :number ): Promise<ProductTyp> {
    return new Promise((resolve) => {
        Products.map((product) => {
            if (inputId==product.id && categoryInput==product.typ){
                resolve(product)
            }
        })
    
    });

}

