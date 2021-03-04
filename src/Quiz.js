import React, {useState} from 'react';
import questions from './data';

function Quiz() {

	const [ifQuizOver, setIfQuizOver] = useState(false);
	const [count, setCount] = useState(0);
	const [index, setIndex] = useState(0);


	const checkAnswerHandler = (answer, isCorrect) => {
		if(isCorrect) {
			setCount(count => count + 1);
		} 
		if(index === questions.length - 1) {
			setIfQuizOver(true)
		}
		setIndex(index => index + 1);
	}

    return (
        <div>
            {/* HINT: replace "false" with logic to display the 
             score when the user has answered all the questions */}
			 {console.log("index", index)}
			{
			ifQuizOver ? (
				<div className='score-section'>You scored {count} out of {questions.length}</div>
			) : (
				<>
					{
						(index!== questions.length) ?
						<div key={index}>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {index+1}</span>/{questions.length}
								</div>
								<div className='question-text'>{questions[index].questionText}</div>
							</div>
							<div className='answer-section'>
								{
									questions[index].answerOptions.map((answer, index) => {
										return (
											<button 
												onClick={() => checkAnswerHandler(answer.answerText,answer.isCorrect )}
											>
												{answer.answerText}
											</button>
										)
									})
								}
							</div>
						</div> : null
					}
				</>
			)}
        </div>
    )
}

export default Quiz
