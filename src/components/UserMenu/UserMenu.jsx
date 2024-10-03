import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userLogout}>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
}