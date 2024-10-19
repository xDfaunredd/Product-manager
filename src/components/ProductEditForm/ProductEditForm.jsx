import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./ProductEditForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../redux/modalEditSlice";
import { editProduct } from "../../redux/productsOpt";
import { selectCurrentProduct } from "../../redux/selectors";

const ProductEditForm = () => {
  const nameId = useId();
  const countId = useId();
  const weightId = useId();
  const commentId = useId();
  const currentProduct = useSelector(selectCurrentProduct);
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    count: "",
    weight: "",
    comment: "",
  };
  const handleSubmit = (values, options) => {
    if (
      values.name.trim() === "" ||
      values.count.trim() === "" ||
      values.weight.trim() === ""
    ) {
      return;
    }

    dispatch(editProduct({ ...values, id: currentProduct.id }));
    dispatch(closeEditModal());

    options.resetForm();
  };
  const handleCancel = () => {
    dispatch(closeEditModal());
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <div className={s.container}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} pattern="[a-zA-Z]*" />
        </div>
        <div className={s.container}>
          {" "}
          <label htmlFor={countId}>Count</label>
          <Field name="count" id={countId} pattern="\d*" />
        </div>
        <div className={s.container}>
          {" "}
          <label htmlFor={weightId}>Weight</label>
          <Field name="weight" id={weightId} pattern="\d*" />
        </div>
        <div className={s.container}>
          {" "}
          <label htmlFor={commentId}>Comment</label>
          <Field name="comment" id={commentId} />
        </div>

        <button type="submit">Add product</button>
        <button onClick={handleCancel}>Cancel</button>
      </Form>
    </Formik>
  );
};

export default ProductEditForm;
