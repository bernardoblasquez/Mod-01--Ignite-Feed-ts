import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/*
  O pacote react é responsável pelo coração (core) do react. Tem todas as 
  funcionalidades que são compartilhadas por todas essas interfaces/ambientes/clientes
  (react native, tv, VR)

  O react-dom é a integração do react com o DOM (Document Object Model). Integra o 
  react para funcionar com o DOM 

  Toda a interface é criada a partir do javascript e ele tem total controle 
  sobre essa interface.


  O componente é um dos principais conceitos que usamos no react. O componente é uma
  forma de desacoplar um pedacinho de nossa interface para que ela se torne repetítível 
  (reutilizável) e se trone mais fácil de dar manutenção. 

  O componente é uma função que retorna um HTML.

  Momentos para criar componentes:
  - quando alguma coisa repete muito em tela e possui
  o mesmo visual e comportamento.
  - Tirar algo de um componente maior sem que aquele 
  componente maior para de funcionar. 
*/
