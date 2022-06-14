import { HomeString } from "../../strings/strings";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const { heading } = HomeString;
  return (
    <>
      <div>
        <h1 className={styles.heading}>{heading}</h1>
      </div>
    </>
  );
};

export default NavBar;
