import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";

export function Comment() {
    return (
      <div className={styles.comment}>
          <img src="https://github.com/natanD1.png" alt="Foto de Perfil"/>
            <div className={styles.commentBox}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Mariana Marinho</strong>
                        <time title="11 de Maio às 08:13" dateTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                    </div>
                    <Trash title="Deletar comentário" />
                </header>

                <p>Muito bom Natan, parabéns!! Continue assim 👏🏻👏🏻</p>
            </div>

          <footer>
              <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
              </button>
          </footer>

      </div>
    )
}