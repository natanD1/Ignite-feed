import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                 src="https://picsum.photos/1920/1080?random"
                 alt=""/>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/natanD1.png" alt="Foto de Perfil"/>

                <strong>Natan Dourado</strong>
                <span>Web Developer & UI/UX Designer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}   
