import {useId} from "react"
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const FeedbackSchema =Yup.object().shape({
    name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    number: Yup.string()
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
})


export default function ContactForm(){
    const nameFieldId = useId()
    const phoneFieldId = useId();
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) =>{
        values.id = nanoid();
        dispatch(addContact(values));
        actions.resetForm();
    }
    return(
        <Formik
        initialValues={{
            name: "",
            number: "",
        }}
        onSubmit = {handleSubmit}
        validationSchema={FeedbackSchema}
        >
            <Form className= {css.contactForm}>
                <div className={css.contact}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type = "text" name = "name" id={nameFieldId}/>
                    <ErrorMessage
                    className={css.formError}
                    name="name"
                    component="span"
                    />
                </div>
                <div className={css.contact}>
                    <label htmlFor={phoneFieldId}>Number</label>
                    <Field type = "tel" name = "number" id={phoneFieldId}/>
                    <ErrorMessage
                    className={css.formError}
                    name="number"
                    component="span"
                    />
                </div>
                <button type="submit" className={css.button}>Add contact</button>
            </Form>
        </Formik>
    )
}