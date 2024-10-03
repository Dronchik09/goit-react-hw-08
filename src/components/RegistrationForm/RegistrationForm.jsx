
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  function handleSubmit(values, actions) {
    if (values.name === "" || values.email === "" || values.password === "")
      return;
    dispatch(register(values));
    actions.resetForm();
  }
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name <Field type="text" name="name"></Field>
          </label>
          <label className={css.label}>
            Email <Field type="email" name="email"></Field>
          </label>

          <label className={css.label}>
            Password <Field type="password" name="password"></Field>
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
