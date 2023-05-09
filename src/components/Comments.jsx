import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/carolineanjos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caroline Anjos</strong>
              <time title="9 de Maio às 7:31" dateTime="2023-05-09 07:31:30">Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}