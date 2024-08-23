
import {useFilterContext} from "../Context/FiltersContext";


export function useFilters() {
  
    const {filters, setFilters} = useFilterContext();
    
  
    const filterProducts = (productos) => {
       return productos.filter(producto => {
        return (
          producto.valor > filters.valorMin &&
          (
            filters.categoria === "todas" ||
            producto.categoria === filters.categoria
          )
        )
      })
    } 
    return {filters, filterProducts, setFilters}
  }