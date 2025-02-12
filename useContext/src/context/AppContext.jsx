import { createContext } from "react"
export const AppContext = createContext()

const ContextProvider = (props) => {
    const name = 'Bishal Thapaliya'
    const phone = '07068319427'

    return(
        <AppContext.Provider value={{name, phone}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider