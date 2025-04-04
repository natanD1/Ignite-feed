import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import {Avatar} from "../Avatar/Avatar.jsx";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                 src="https://picsum.photos/1920/1080?random"
                 alt=""/>

            <div className={styles.profile}>

                <Avatar hasBorder src="https://github.com/natanD1.png"/>

                <strong>Natan Dourado</strong>
                <span>Web Developer & UI/UX Designer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
             <div className={styles.profile}>
                
                <strong>
                    Natan Dourado
                </strong>
                
                <span>
                    Web Developer & UI/UX Designer
                </span>
                
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
                
             </div>
        </aside>
    )
}   
