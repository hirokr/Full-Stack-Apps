import styles from "./navbar.module.css";
import { IoLogOut } from "react-icons/io5";
import { FaArrowsTurnToDots } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
        <FaArrowsTurnToDots className={
          styles.icon
        } />
        <h1>Modern TODO</h1>
        </div>
        <div className={styles.login}>
          <IoLogOut className={
            `${styles.icon} ${styles.logout}`
          } />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
