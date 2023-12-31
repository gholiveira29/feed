import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'ás' HH:mm'h'",
        { locale: ptBR }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function createNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function NewCommnetChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeletedOne);
    }

    function newCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return (
                            <p key={line.content}>
                                {' '}
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>

            <form onSubmit={createNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea
                    onChange={NewCommnetChange}
                    value={newCommentText}
                    placeholder="Deixe um comentario"
                    onInvalid={newCommentInvalid}
                    required
                />

                <footer>
                    <button disabled={!newCommentText} type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </article>
    );
}
