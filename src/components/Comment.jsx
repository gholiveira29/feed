import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://i.pinimg.com/564x/f6/31/30/f631308af4357eaf9a514450ddb6f41d.jpg"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Henrique Pereira</strong>
                            <time
                                title="23 de setembro ás 12:30h"
                                dateTime="2023-23-09 12:00:00"
                            >
                                cerca de 1h atraz
                            </time>
                        </div>
                        <button title="Deletar comentario">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>teste teste teste teste </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
