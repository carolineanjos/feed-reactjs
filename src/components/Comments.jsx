import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment () {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/carolineanjos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caroline Anjos</strong>
              <time title="9 de Maio às 7:31" dateTime="2023-05-09 07:31:30">Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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