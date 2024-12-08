
import Layouts from "./layouts";
import Products from "./products";
import Redirect from "../../Redirect";
import { RouteObject } from "react-router-dom";


    const routes: RouteObject = {
        
        path: '/products',
            element: <Layouts />,
                children: [
                    {
                        index: true,
                        element: <Products />
                    },
                    {
                        path: 'musics',
                        element: <Redirect path='/' />
                    },


                ]

    
}


export default routes;



