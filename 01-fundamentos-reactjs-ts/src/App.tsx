import { useState } from 'react'
import {Post} from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './app.module.css'
import './global.css'

/*
Informações que varia de Post para outro
 - author: {avatarUrl:"", name:"", role:""} 
 - published: Date,
 - content: String
*/

const posts = [
  {
    id: 1,
    author: { 
      avatarURL: 'https://avatars.githubusercontent.com/u/4926167?v=4',
      name: 'Bernardo Blasquez',
      role: 'Front-end Developer'
    }, 
    content: [
      {type: 'paragraph', content: 'Fala pessoal'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui'},
      {type: 'paragraph', content: 'Acesse e deixe seu feedback'},    
      {type: 'link', content: 'devonlane.design'}  
    ],
    publishedAt: new Date('2022-08-26 20:00:00')
  },

  {
    id: 2,
    author: { 
      avatarURL: 'https://avatars.githubusercontent.com/u/44641613?v=4',
      name: 'Ademario Santana',
      role: 'Mobile Developer'
    }, 
    content: [
      {type: 'paragraph', content: 'Fala pessoal'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui'},
      {type: 'paragraph', content: 'Acesse e deixe seu feedback'},    
      {type: 'link', content: 'devonlane.design'}  
    ],
    publishedAt: new Date('2022-08-29 23:17:00')
  },
  {
    id: 3,
    author: { 
      avatarURL: 'https://avatars.githubusercontent.com/u/28743763?v=4',
      name: 'Manoel Ribeiro',
      role: 'Full Stack Developer'
    }, 
    content: [
      {type: 'paragraph', content: 'Fala pessoal'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui'},
      {type: 'paragraph', content: 'Acesse e deixe seu feedback'},    
      {type: 'link', content: 'devonlane.design'}  
    ],
    publishedAt: new Date('2022-08-25 21:00:00')
  }

];

export function App() {
 
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
              )
            })
          }
        </main>
      
      </div>
      
    </div>
    
  )
}

/*
  Evitar a todo custo que o back-end retorne HTML para o front-end
  Deixa o site mais aberto para vulnerabilidades. Abre a possibilidade
  de outro usuário inserir um script dentro so seu conteúdo.

  É importante ter o conteúdo bruto.

  foreach não tem retorno, por isso usamos map()

--------------------------------------------------------------------------------
  Key no React

  Por que deve ser única?
  3 momentos em que um componente é renderizado novamente no React

  1. Quando o estado altera;
  2. Quando a propriedade altera;
  3. Quando um componente pai renderiza novamente
  
  
  TYPESCRIPT
  - superset em cima da linguagem javascript que adiciona tipagem estática em 
  linguagem de tipagem dinâmica cima.

  Traz inteligencia para nosso editor de código. 
  - o javascript não avisa, antecipadamente ao desenvolvedor, se este passar 
  um formato de dado errado para uma determinada função, por ex: passar uma 
  string para uma função que recebe um objeto com vários dados diferentes.
  - o javascript não permite saber, antecipadamente, o formato de um dado 
*/