import { Post } from './components/Post';
import { Header } from './components/Hearder';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Guilherme Oliveira"
                        content="Texte qualquer"
                    />
                </main>
            </div>
        </>
    );
}

export default App;
