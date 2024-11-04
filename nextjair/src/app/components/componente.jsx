import { useEffect, useState } from "react";
import { getMarcasCarros } from '../services/UserService';

export function ComponentePractica() {
    const [marca, setMarca] = useState(null);

    useEffect(() => {
        async function MarcadeCarros() {
            const carrosMarcas = await getMarcasCarros();
            const primeraMarca = carrosMarcas.find((x) => x.id === 1);
            setMarca(primeraMarca);
        }
        MarcadeCarros();
    }, []);

    const numeros = [1, 2, 3, 4, 5];
    const primerNumero=numeros.filter((numero) => numero > 3)
    console.log(primerNumero);
    return (
        <div>
            <h1>Marca de Carro con ID 1</h1>
            <ul>
                <li>
                    {marca?.nombre} - {marca?.pais}
                </li>
            </ul>
        </div>
    );
}
