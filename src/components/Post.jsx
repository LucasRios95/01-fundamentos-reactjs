import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/maykbrito.png" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Rios</strong>
                        <span>Backend Developer</span>
                    </div>
                </div>
                <time title='29 de maio às 11:44' dateTime="2024-05-29 11:44:13">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p><a href="http://">👉 jane.design/doctorcare</a></p>
                <p>
                    <a href="http://">#novoprojeto </a>
                    <a href="http://">#nlw </a>
                    <a href="http://">#rocketseat</a>
                </p> 
            </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea
                        placeholder="Deixe um comentário"
                    />

                    <footer>
                        <button type="submit">Comentar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        </article>
    )
}