import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faListAlt,
  faFaceLaugh
} from '@fortawesome/free-regular-svg-icons';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <button
          className={styles.iconButton}
          aria-label="User Profile"
          type="button"
        >
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <span className="sr-only">User</span>
        </button>

        <Link href="/" aria-label="Home" className={styles.logoLink}>
          <FontAwesomeIcon icon={faFaceLaugh} className={styles.logo} />
          <span className="sr-only">Restaurants</span>
        </Link>

        <button
          className={styles.iconButton}
          aria-label="Settings"
          type="button"
        >
          <FontAwesomeIcon icon={faListAlt} className={styles.icon} />
          <span className="sr-only">Settings</span>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
