import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="https://i.pinimg.com/564x/30/b4/80/30b4808adbda438e357db0c284a20e64.jpg" />

                <strong>Guilherme Oliveira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
