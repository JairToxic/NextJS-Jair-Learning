import { useEffect, useState } from "react";
import { getMarcasCarros } from '../services/UserService';


export function ComponentePractica() {

    const  [marcas,setMarcas] = useState([])

    useEffect(() => {
      async function MarcadeCarros() {
        const carrosMarcas =await getMarcasCarros();
        setMarcas(carrosMarcas);
      } MarcadeCarros();
  
    }, [])
    
return(
<div>
<h1>Lista de Marcas de carros</h1>
<ul>
    <li>
        {marcas.nombre}
    </li>
</ul>



</div>

)



    
}