import CategoryPage from "./CategoryPages";
import Layouts from "./layouts";
import Products from "./productsContainer";
import Redirect from "../../Redirect";
import { RouteObject } from "react-router-dom";
import { fetchProducts } from "../../api";
import Productsinfo from "./Productspage";

const routes: RouteObject = {

    path: '/products',
    element: <Layouts />,
    children: [
        {
            index: true,
            element:<Productsinfo/>

        },
        {
            path: ':category',
            element: <CategoryPage />,
            errorElement: <h1>products not found</h1>,
            loader: async ({ params }) => {
                const productsfilter = await fetchProducts(String(params.category));

                return { productsfilter };

            }

        }
    ]


}


export default routes;



