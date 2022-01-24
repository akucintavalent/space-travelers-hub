import planet from './planet.png';
import styles from './Navbar.module.css';

const Navbar = () => (
  <header>
    <img className={styles.logo} src={planet} alt="Logo (planet)" />
    <nav />
  </header>
);

export default Navbar;
