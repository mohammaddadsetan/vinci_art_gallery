import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import ProductContainer from "./productContainer";
export default function Layouts(){

return(
<>
<Header position="none"/>
<ProductContainer/>
</>
)
}











