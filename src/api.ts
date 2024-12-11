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
    { id: 15, title: "vangogh", img: michel, typ: "paints" },
    { id: 16, title: "da vinci", img: michel2, typ: "paints" },
    { id: 17, title: "jac david", img: michel, typ: "paints" },
    { id: 18, title: "picasso", img: michel2, typ: "paints" },
    { id: 19, title: "raphael", img: michel, typ: "paints" },
    { id: 20, title: "matisse", img: michel2, typ: "paints" },
    { id: 21, title: "pollock", img: michel, typ: "paints" },
    { id: 0, title: "farshchian", img: michel, typ: "musics" },
    { id: 1, title: "kamalolmolk", img: michel2, typ: "musics" },
    { id: 2, title: "salvador dali", img: michel, typ: "musics" },
    { id: 3, title: "michelangelo", img: michel2, typ: "musics" },
    { id: 4, title: "rembrandt", img: michel, typ: "musics" },
    { id: 5, title: "munch", img: michel2, typ: "musics" },
    { id: 6, title: "cezanne", img: michel, typ: "musics" },
    { id: 7, title: "monet", img: michel2, typ: "musics" }
    
];

export function fetchProducts(categoryInput: string): Promise<ProductTyp[]> {
    return new Promise((resolve) => {
        let productsfilter:ProductTyp[]=[];
        for (let index = 0; index < Products.length; index++) {
           if (Products[index].typ==categoryInput) {
          productsfilter.push(Products[index]);
          
           }
          
        }
        resolve(productsfilter)
    });


    
};




export function fetchProduct(categoryInput: string, inputId: number): Promise<ProductTyp> {
    return new Promise((resolve) => {
        Products.map((product) => {
            if (inputId == product.id && categoryInput == product.typ) {
                resolve(product)
                
            }
        })

    });

}

