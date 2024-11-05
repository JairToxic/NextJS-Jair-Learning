import { useEffect, useState } from "react";
import { getColores } from '../services/UserService';

export function ComponentePractica1() {
    const [colores, setColores] = useState([]);

    useEffect(() => {
        async function ColoresEstilos() {
            // Asegúrate de llamar a la función con paréntesis para ejecutar `getColores`
            const EsCol = await getColores();
            setColores(EsCol);
        }
        
        ColoresEstilos();
    }, []);

    return (
        <div>
            <h1>Lista de Colores</h1>
            <ul>
                {colores.map((color) => (
                    <li key={color.id}>
                        <p><strong>Nombre:</strong> {color.nombre}</p>
                        <p><strong>Hex:</strong> {color.hex}</p>
                        <p><strong>RGB:</strong> {color.rgb}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}
