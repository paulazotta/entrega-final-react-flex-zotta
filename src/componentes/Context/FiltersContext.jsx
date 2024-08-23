import { createContext, useContext, useState } from "react";

const FiltersContext = createContext()

export const useFilterContext = () => useContext(FiltersContext)

export function FiltersProvider ({children}){
    const [filters, setFilters] = useState({
        categoria: "todas",
        valorMin: 0
    });


    return(
        <FiltersContext.Provider value={{
            filters, setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}