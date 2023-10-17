import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css"
import { logoutAction } from "redux/loginUser.thunk/loginUser.slice";


export const UserMenu = () => {
  const email = useSelector(state => state.loginUser?.user?.user?.email)
  const dispatch = useDispatch()
 

  const handleClick = () => {
   dispatch(logoutAction())
  }

  return (
    <>
      <div>
        <p>{`${email}`}</p>
        <button type="button" className={css.button} onClick={handleClick}>Logout</button>
      </div>
    </>
  );
};
