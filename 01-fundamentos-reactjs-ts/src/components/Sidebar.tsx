import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
   return(
      <aside className={styles.sidebar}>
         <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" 
         />
         <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/4926167?v=4"/>
            <strong>Bernardo Blasquez</strong>
            <span>Front-end-developer</span>
         </div>
         <footer>
            <a href="#">
               <PencilLine size={20}/>
               editar seu perfil
            </a>
         </footer>
      </aside>
   )
}