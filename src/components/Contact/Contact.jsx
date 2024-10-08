import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ data }) {
  const dispatch = useDispatch();

  function onDelete(id) {
    dispatch(deleteContact(id));
  }
 

  return (
    <div className={css.wrapper}>
      <div>
        <h2 className={css.title}>
          <FaUser className={css.icon} size="14" /> {data.name}
        </h2>
        <p className={css.phone}>
          <FaPhone className={css.icon} size="14" />
          {data.number}
        </p>
      </div>
      <div className={css.btnWrapper}>
        <button
          className={css.button}
          type="button"
          onClick={() => onDelete(data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}