import { RouteObject } from "react-router-dom"
import Layouts from "./layouts"
import RecipeReviewCard from "./product"

const routes:RouteObject={

    path: '/products/paints/0',
    element: <Layouts />,
        children: [
            {
                index: true,
                element: <RecipeReviewCard/>
            }
           


        ]

}
export default routes;