import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/LucasRios95.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jailson Mendes</strong>
                            <time title='29 de maio às 11:44' dateTime="2024-05-29 11:44:13">Publicado há 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Parabéns pela iniciativa!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir 
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}