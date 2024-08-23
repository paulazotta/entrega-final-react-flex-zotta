import "./Filters.css";
import { useState, useId } from "react";
import { useFilters } from "../hoocks/useFilters";
import {useFilterContext} from "../Context/FiltersContext";
import React from "react";

export function Filters (){
    const {setFilter} = useFilters()
    const [valorMin, setValorMin] = useState(0);
    const valorMinFilterId = useId();
    const categoriaFilterId = useId();

    console.log({categoriaFilterId})

    const handleChangeValorMin = (event) =>{
        setValorMin(event.target.value)
        setFilter(prevState =>({
            ...prevState, 
            valorMin: event.target.value
        }))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor={valorMinFilterId}>Precio</label>
                <input 
                    type="range" 
                    id={valorMinFilterId} 
                    min="200" 
                    max="3000"
                    onChange={handleChangeValorMin} 
                />
                <span>USD {valorMin}</span>
                
            </div>
            <div>
               <label htmlFor={categoriaFilterId}>Categoría</label> 
               <select id={categoriaFilterId}>
                    <option value="todas">Todas</option>
                    <option value="taller">Taller</option>
                    <option value="particular">Particular</option>
               </select>
            </div>
        </section>
    )
}