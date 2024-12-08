import Header from "../Header/Header";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import ProductContainer from "./productContainer";
import { ProductTyp } from "../../api";
export default function Layouts(){
const params=useParams();
const {product}=useLoaderData() as {product:ProductTyp}
let renderObject=null
if(params.category=="paints"){
    renderObject=<ProductContainer/>
}
else{renderObject=<h1>not found</h1>}
return(
<>

{renderObject}
</>
)
}











