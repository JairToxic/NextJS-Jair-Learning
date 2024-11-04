import { useEffect, useState } from "react";
import { getMarcasCarros } from '../services/UserService';

export function ComponentePractica() {
    const [marca, setMarca] = useState(null);

    useEffect(() => {
        async function MarcadeCarros() {
            const carrosMarcas = await getMarcasCarros();
            const primeraMarca = carrosMarcas.map((x) => x.nombre)[0]; // Cambiado para obtener solo el primer nombre
            setMarca(primeraMarca);
            console.log(primeraMarca);
        }
        MarcadeCarros();
    }, []);

    const numeros = [1, 2, 3, 4, 5];
    const primerNumero = numeros.filter((numero) => numero > 3);
    console.log(primerNumero);

    return (
        <div>
            {marca}
        </div>
    );
}
