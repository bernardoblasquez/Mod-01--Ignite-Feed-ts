import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
   hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {

   console.log(props)
   return(
      <img 
         className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
         {...props}
      />
   )
}

/*
   Extender AvatarProps usando ImgHTMLAttributes é forma mais facilitada de 
   escrever uma interface para IMG, sem a necessidade de declarar cada um dos
   parâmetros da imagem. Nesse caso é necessário adicionar somente os atributos
   que não existem em ImgHTMLAttributes

   ..props = nesse contexto (atributos da função) é chamado de rest operator, já
   que pega todos os outros atributos que nõa foram declarados

   {...props} = spread operator, pega cada valor dentro de props e passa para  

*/