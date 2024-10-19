import ReactModal from "react-modal";
import { closeModal } from "../../redux/modalSlice";
import s from "./ModalProduct.module.css";
import ProductForm from "../ProductForm/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen } from "../../redux/selectors";
ReactModal.setAppElement("#root");

const ModalProduct = () => {
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <ReactModal
          isOpen={isOpen}
          closeTimeoutMS={250}
          preventScroll={true}
          onRequestClose={() => dispatch(closeModal())}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          className={s.modalContent}
          overlayClassName={s.modalOverlay}
        >
          <ProductForm />
        </ReactModal>
      </div>
    </>
  );
};

export default ModalProduct;
