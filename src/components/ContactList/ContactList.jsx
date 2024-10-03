import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/selectors";


export default function PhoneList() {
    const contacts = useSelector(selectFilteredContacts);
    return(
        <ul className={css.list}>
            {contacts.map((data) =>(
               <li className={css.contact} key={data.id}> 
               <Contact data = {data} />
               </li>
            ))}
        </ul>
    )
}