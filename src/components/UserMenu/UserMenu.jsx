import { useSelector } from "react-redux";

import css from "./UserMenu.module.css"

export const UserMenu = () => {
  const email = useSelector(state => state.loginUser?.user?.user?.email)
  return (
    <>
      <div>
        <p>{`${email}`}</p>
        <button type="button" className={css.button}>Logout</button>
      </div>
    </>
  );
};
