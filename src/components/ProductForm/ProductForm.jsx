import { Field, Form, Formik } from "formik";
import { useEffect, useId, useRef } from "react";
import s from "./ProductForm.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { addProduct } from "../../redux/productsOpt";
import toast from "react-hot-toast";

const ProductForm = () => {
  const nameId = useId();
  const countId = useId();
  const weightId = useId();

  const dispatch = useDispatch();

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const initialValues = {
    name: "",
    count: "",
    weight: "",
  };

  const handleSubmit = (values, options) => {
    if (
      values.name.trim() === "" ||
      values.count.trim() === "" ||
      values.weight.trim() === ""
    ) {
      return toast.error("Fill all the fields");
    }

    dispatch(addProduct(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully added");
      })
      .catch(() => {
        toast.error("Something went wrong. Try again!");
      });

    dispatch(closeModal());

    options.resetForm();
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <div className={s.container}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} pattern="[a-zA-Z]*" innerRef={ref} />
        </div>
        <div className={s.container}>
          <label htmlFor={countId}>Count</label>
          <Field name="count" id={countId} pattern="\d*" />
        </div>
        <div className={s.container}>
          <label htmlFor={weightId}>Weight</label>
          <Field name="weight" id={weightId} pattern="\d*" />
        </div>

        <button type="submit">Add product</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
