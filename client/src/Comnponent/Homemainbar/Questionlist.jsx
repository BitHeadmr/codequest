import React from 'react'
import Question from './Question'
function Questionlist({questionlist}) {
  // console.log(questionlist)
  return (
    <>
    {questionlist.map((question)=>(
      <Question question={question} key ={question._id}/>
    ))}
    </>
  )
}

export default Questionlist