import { RouteObject } from "react-router-dom"
import Layouts from "./layouts"
import RecipeReviewCard from "./product"
import { fetchProduct } from "../../api"
const routes: RouteObject = {

    path: '/products/:category/:id',
    element: <Layouts />,
    errorElement:<h1>product not found</h1>,
    loader: async ({ params }) => {
        const product = await fetchProduct(String(params.category),Number(params.id));
    
        return { product };
        
    }
    

}
export default routes;