import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  function handleSubmit(values, actions) {
    if (values.email === "" || values.password === "") return;
    dispatch(login(values));
    actions.resetForm();
  }
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email <Field type="email" name="email"></Field>
          </label>

          <label className={css.label}>
            Password <Field type="password" name="password"></Field>
          </label>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}