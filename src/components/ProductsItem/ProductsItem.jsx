import { useDispatch } from "react-redux";
import { openEditModal } from "../../redux/modalEditSlice";
import { deleteProduct } from "../../redux/productsOpt";
import s from "./ProductsItem.module.css";
import { Button } from "@mui/material";

const ProductsItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openEditModal(item));
  };

  const handleDelete = () => {
    dispatch(deleteProduct(item.id));
  };

  return (
    <li className={s.item}>
      <p className={s.text}>
        <span>Name:</span> {item.name}
      </p>
      <p className={s.text}>
        <span>Count:</span> {item.count}
      </p>
      <p className={s.text}>
        <span>Weight:</span> {item.weight}
      </p>
      {item.comment ? <p>Comment: {item.comment}</p> : ""}

      <Button onClick={handleClick} variant="outlined" size="small">
        Edit
      </Button>
      <Button onClick={handleDelete} variant="outlined" size="small">
        Delete{" "}
      </Button>
    </li>
  );
};

export default ProductsItem;
