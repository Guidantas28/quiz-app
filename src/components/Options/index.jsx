import React, { useContext } from 'react'
import { QuizContext } from '../../context/Quiz'

import './styles.css'

const Option = ({ option, selectOption, answer }) => {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      }${quizState.answerSelected && option !== answer ? 'wrong' : ''}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  )
}

export default Option
