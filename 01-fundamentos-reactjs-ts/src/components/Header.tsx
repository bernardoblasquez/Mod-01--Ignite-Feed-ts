import styles from './header.module.css'
import logoIgnite from '../assets/ignite_symbol.svg' 
export function Header() {
   return(
      <header className={styles.header}>
         <img src={logoIgnite} />
      </header>
   )
}