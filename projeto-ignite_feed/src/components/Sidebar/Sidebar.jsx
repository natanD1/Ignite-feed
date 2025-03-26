import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
             <img className={styles.cover} src="https://images.unsplash.com/photo-1742732370413-063ed597e8f4?fm=jpg&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""/>

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
