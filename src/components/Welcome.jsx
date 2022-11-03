import Quiz from '../assets/quiz.svg'

import './Welcome.css'

export const Welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  )
}
