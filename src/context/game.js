import React, { useContext } from 'react';

const GameContext = React.createContext();
 
const GameProvider = ({children}) => {
    return (
        <GameContext.Provider 
            value={{}}
        >
            {children}
        </GameContext.Provider>
    )   
}


function useGame() {
    return useContext(GameContext)
}

export {GameProvider, GameContext, useGame}