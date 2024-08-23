import "./Filters.css";
import { useState, useId } from "react";
import { useFilters } from "../hoocks/useFilters";
import {useFilterContext} from "../Context/FiltersContext";
import React from "react";

export function Filters (){
    const {setFilters} = useFilters()
    const [valorMin, setValorMin] = useState(0);
    const valorMinFilterId = useId();
    const categoriaFilterId = useId();


    const handleChangeValorMin = (event) =>{
        const value = event.target.value;
        setValorMin(value);
        setFilters(prevState =>({
            ...prevState, 
            valorMin: value
        }))
    }

    const handleChangeCategoria = (event) => {
        setFilters(prevState => ({
          ...prevState,
          categoria: event.target.value
        }));
      };

    return(
        <section className="filters">
            <div>
                <label htmlFor={valorMinFilterId}>Precio</label>
                <input 
                    type="range" 
                    id={valorMinFilterId} 
                    min="0" 
                    max="3001"
                    onChange={handleChangeValorMin} 
                />
                <span>USD {valorMin}</span>
                
            </div>
            <div>
               <label htmlFor={categoriaFilterId}>Categoría</label> 
               <select id={categoriaFilterId} onChange={handleChangeCategoria}>
                    <option value="todas">Todas</option>
                    <option value="taller">Taller</option>
                    <option value="particular">Particular</option>
               </select>
            </div>
        </section>
    )
}