import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
export default function Layouts(){

return(
<>
<Header position="none"/>
<Outlet/>
</>
)
}











