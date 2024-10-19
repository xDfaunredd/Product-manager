import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../redux/selectors";
import ProductsItem from "../ProductsItem/ProductsItem";
import s from "./ProductsList.module.css";

const ProductsList = () => {
  const products = useSelector(selectFilteredProducts);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {products.map((item) => (
          <ProductsItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
