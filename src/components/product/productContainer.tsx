import { useLoaderData, useParams } from "react-router-dom";
import Product from "./product";
import { ProductTyp } from "../../api";


function ProductContainer() {
  const params = useParams();
  const {product} = useLoaderData() as { product: ProductTyp};
  console.log(product)
  return (
    <div>
      <Product productt={product} />
     </div>
  );
}

export default ProductContainer;
