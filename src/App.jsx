import { Post } from './components/Post';
import { Header } from './components/Hearder';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl:
                'https://i.pinimg.com/564x/72/fc/ff/72fcffc6494dc3167f241a30569f4b95.jpg',
            name: 'Henrique Pereira',
            role: 'Web developer',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-09-23 12:30:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl:
                'https://i.pinimg.com/564x/16/5e/69/165e690fdff28d43c917091d8f32414f.jpg',
            name: 'Talita Lima',
            role: 'Developer',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2023-09-22 12:30:00'),
    },
];

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </>
    );
}

export default App;
