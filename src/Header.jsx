import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
