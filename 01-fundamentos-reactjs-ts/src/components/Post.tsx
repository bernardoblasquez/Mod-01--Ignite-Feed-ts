import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {
   /* DATE FNS JS
      const options = { 
            day:'2-digit',
            month:'long',
            hour: '2-digit', minute: '2-digit'
      };
      const publishedFormattedDate = Intl.DateTimeFormat('pt-BR', options).format(publishedAt);
   */
  // Date FNS package
   const publishedFormattedDate = format(publishedAt, "dd 'de' LLLL 'às' H:mm'h'",{
      locale:ptBR
   })

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
   })

   const [newCommentText, setNewCommentsText] = useState([''])

   const [comments, setComments] = useState([
      'Comentário '   
   ])

   const handleCreateNewComments = () => {
      event.preventDefault();
      setComments([...comments, newCommentText]);
      setNewCommentsText('')

   }

   const handleNewCommentChange = () => {
      event.target.setCustomValidity('')
      setNewCommentsText(event.target.value)
   }

   const deleteComment = (commenttoDelete) => {
      const commentsWithoutDeleteOne = comments.filter(comment => {
         return comment !== commentToDelete;
      })
      
      setComments(commentsWithoutDeleteOne)
   }

   function handleNewCommentInvalid(){
      console.log(event);
      event.target.setCustomValidity('Esse campo é obrigatório, pô!')
   }

   const isNewCommentEmpty = newCommentText.length === 0

   return(
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar src={author.avatarUrl} />
               <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
               </div>
            </div>
            <time title={publishedFormattedDate} dateTime="2022-05-11 08:13:30">
               {publishedDateRelativeToNow.toString()}
            </time>
         </header>

         <div className={styles.content}>
           {content.map(line => {
               if (line.type === 'paragrath'){
                  return <p key={line.content}>{line.content}</p>;
               }
               else if (line.type === 'link'){
                  return <p key={line.content}><a href="#">{line.content}</a></p>;
               }
           })}
         </div>

         <form
            onSubmit={handleCreateNewComments}
            className={styles.commentForm}>

            <strong>Deixe um comentário</strong>
            <textarea 
               name="comment"
               value={newCommentText}
               onChange={handleNewCommentChange}
               placeholder="Deixe seu comentário"
               onInvalid={handleNewCommentInvalid}
               required
            >
               
            </textarea>

            <footer>
               <button 
                  type="submit"
                  disabled={isNewCommentEmpty}
               >
                  Publicar
               </button>
            </footer>
         </form>

         <div className={styles.commentList}>
            {comments.map(comment => {
               return( 
                  <Comment 
                     key={comment} 
                     content={comment} 
                     onDeleteComment={deleteComment}
                  />
               )
            })}
            
         </div>
         
      </article>
   )
}

/*
   Imutabilidade
   - NUNCA Alteramos uma variável na memória.
   - As variáveis não sofrem mutação (tem seu valor alterado), criamos um novo 
   valor, espaço na memória. 
   - A imutabilidade é mais performática, já que Criar um valor na memória 
   permite ser mais performático do que comparar e alterar o valor existente.

   No React nunca estamos alterando uma informação, estamos sempre criando uma 
   nova informação. 
*/