import ReactModal from "react-modal";

import s from "./ModalEditProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectEditIsOpen } from "../../redux/selectors";
import ProductEditForm from "../ProductEditForm/ProductEditForm";
import { closeEditModal } from "../../redux/modalEditSlice";
ReactModal.setAppElement("#root");

const ModalEditProduct = () => {
  const isOpen = useSelector(selectEditIsOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <ReactModal
          isOpen={isOpen}
          closeTimeoutMS={250}
          preventScroll={true}
          onRequestClose={() => dispatch(closeEditModal())}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          className={s.modalContent}
          overlayClassName={s.modalOverlay}
        >
          <ProductEditForm />
        </ReactModal>
      </div>
    </>
  );
};

export default ModalEditProduct;
