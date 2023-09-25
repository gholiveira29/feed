import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handledeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

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
                        <button
                            onClick={handledeleteComment}
                            title="Deletar comentario"
                        >
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content} </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
