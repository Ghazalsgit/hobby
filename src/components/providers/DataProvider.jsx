import React, {createContext, useState, useEffect} from 'react'

const Hummus = createContext()

function DataProvider({children}) {
    const [ghaz, setGhaz] = useState("peanut")

    return (
        <Hummus.Provider value={{ghaz}}>
       {children}
       </Hummus.Provider>
    )
}

export {DataProvider, Hummus}
