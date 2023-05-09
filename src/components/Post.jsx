import { Avatar } from './Avatar'
import { Comment } from './Comments'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/carolineanjos.png"/>
          <div className={styles.authorInfo}>
            <strong>Caroline Anjos</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="9 de Maio às 7:31" dateTime="2023-05-09 07:31:30">Publicado há 1h</time>
      </header>
      
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉{' '} <a href=""> jane.design/doctorcare </a></p>

        <p>
          <a>#novoprojeto </a> 
          <a>#nlw </a>
          <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit"> Publicar </button>
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