import { useState } from "react";
import { addColor } from '../services/UserService';

export function ComponentePractica1() {
    const [nombre, setNombre] = useState('');
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState('');

    async function handleSubmit(event) {
        event.preventDefault(); // Previene que la página se recargue
        const nuevoColor = { nombre, hex, rgb }; // Crea el objeto color con los valores
        await addColor(nuevoColor); // Llama al servicio para enviar el color
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </label>
            <br />
            <label>
                Hex:
                <input
                    type="text"
                    value={hex}
                    onChange={(e) => setHex(e.target.value)}
                />
            </label>
            <br />
            <label>
                RGB:
                <input
                    type="text"
                    value={rgb}
                    onChange={(e) => setRgb(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Enviar Color</button>
        </form>
    );
}
