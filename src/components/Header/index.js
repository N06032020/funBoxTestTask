import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <h1 className={styles.headerTitle}>Ты сегодня покормил кота?</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
