import { useContext, useEffect } from 'react'
import './App.css'
import { Question } from './components/Questions'
import { Welcome } from './components/Welcome'

import { QuizContext } from './context/Quiz'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' })
  }, [])
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
    </div>
  )
}

export default App
