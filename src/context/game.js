import React, { useContext, useState } from 'react';

const GameContext = React.createContext();
 
const GameProvider = ({children}) => {
    const [tour, setTour] = useState(0);

    const newTour = item => {
        setTour(tour + 1);
        return tour
    }

    const randomQuestion = item => {
        let random = [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)]; // iki random sayı üretiyoruz
        let questionObj = {first: random[0], second: random[1], result: random[0] * random[1]}; // iki sayıyı çarpıyoruz
        
        return questionObj
    }

    const QuestionAnswers = item => {
        
    }

    return (
        <GameContext.Provider 
            value={{
                newTour,
                randomQuestion,
                QuestionAnswers,
                tour,
            }}
        >
            {children}
        </GameContext.Provider>
    )   
}


function useGame() {
    return useContext(GameContext)
}

export {GameProvider, GameContext, useGame}