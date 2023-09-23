import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://i.pinimg.com/564x/72/fc/ff/72fcffc6494dc3167f241a30569f4b95.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Guilherme Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title="23 de setembro ás 12:30h"
                    dateTime="2023-23-09 12:00:00"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto
                    que fiz no NLW Return, evento da Rocketseat. O nome do
                    projeto é DoctorCare 🚀
                </p>
                <p>
                    <a href="#">jane.design/doctorcare</a>
                </p>

                <p>
                    <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea placeholder="Deixe um comentario" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}
