import { useContext, useEffect } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import GameOver from './components/GameOver'
import Question from './components/Questions'

import { QuizContext } from './context/Quiz'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' })
  }, [dispatch])
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  )
}

export default App
