import React from "react";
/* import '../App.css'; */

const Option = ({key, option, handleAnswer, buttonDisabled, question}) => {
    
    return (
        buttonDisabled === 'disabled' 
              ? 
              <>
                <button className='OptionButton first' onClick={(e) => handleAnswer(e.target.textContent)} disabled>{(question.first - 1) * question.second}</button>
                <button className='OptionButton second' onClick={(e) => handleAnswer(e.target.textContent)} disabled>{question.first * question.second}</button>
                <button className='OptionButton third' onClick={(e) => handleAnswer(e.target.textContent)} disabled>{question.first * (question.second - 1)}</button> 
              </>
              : 
              <>
                <button className='OptionButton first' onClick={(e) => handleAnswer(e.target.textContent)} >{(question.first - 1) * question.second}</button>
                <button className='OptionButton second' onClick={(e) => handleAnswer(e.target.textContent)} >{question.first * question.second}</button>
                <button className='OptionButton third' onClick={(e) => handleAnswer(e.target.textContent)} >{question.first * (question.second - 1)}</button> 
              </>
    )

}

export default Option;