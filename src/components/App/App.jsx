import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import ModalProduct from "../ModalProduct/ModalProduct";
import "./App.css";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/productsOpt";
import ProductsList from "../ProductsList/ProductsList";
import ModalEditProduct from "../ModalEditProduct/ModalEditProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />

      <ModalProduct />
      <ModalEditProduct />
      <ProductsList />
    </>
  );
}

export default App;
