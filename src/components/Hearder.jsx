import styles from './Header.module.css';
import igniteLogo from '../image/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo" />
        </header>
    );
}
