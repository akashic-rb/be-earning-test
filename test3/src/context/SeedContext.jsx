import { createContext, useContext, useState } from "react";

const SeedContext = createContext(null)

export const useSeed = () => {
    return useContext(SeedContext)
}

const SeedContextProvider = ({children}) => {
    const [seeds, setSeeds] = useState()

    return (
        <SeedContext.Provider value={{seeds, setSeeds}}>
            { children }
        </SeedContext.Provider>
    );
}
 
export default SeedContextProvider;