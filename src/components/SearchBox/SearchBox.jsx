import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export default function SearchBox(){

    const dispatch = useDispatch();
    const filter = useSelector(selectFilter)

    const onChange = (e) =>{
        dispatch( setFilter(e.target.value))
    }

    return(
        <div className={css.searchBox}>
            <p>Search by name</p>
            <input
            type="text"
            value = {filter}
            onChange={onChange}
            />
        </div>
    )
}