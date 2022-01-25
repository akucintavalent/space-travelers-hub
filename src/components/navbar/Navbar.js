import { NavLink } from 'react-router-dom';
import planet from './planet.png';
import styles from './Navbar.module.css';

const Navbar = () => (
  <header className={styles.Header}>
    <div className={styles.LogoAndTitle}>
      <img className={styles.logo} src={planet} alt="Logo (planet)" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav className={styles.Nav}>
      <NavLink to="rockets" className={({ isActive }) => (isActive ? styles.NavLinkActive : styles.NavLinkInactive)}>Rockets</NavLink>
      <NavLink to="missions" className={({ isActive }) => (isActive ? styles.NavLinkActive : styles.NavLinkInactive)}>Missions</NavLink>
      |
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.NavLinkActive : styles.NavLinkInactive)}>My Profile</NavLink>
    </nav>
  </header>
);

export default Navbar;
