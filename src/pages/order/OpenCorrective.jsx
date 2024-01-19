import React, { useState } from "react";

const OpenCorrective = () => {

    const [location, setLocation] = useState("");
    const [tower, setTower] = useState("");
    const [floor, setFloor] = useState("");
    const [area, setArea] = useState("");
    const [description, setDescription] = useState("");
    const [tech_id, setTechId] = useState("");
    
    const handleOpenOrder = async (e) => {
        e.preventDefault();

        const techIdAsNumber = parseInt(tech_id, 10);

        try {
            const response = await fetch('http://192.168.15.21:8080/corrective', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location,
                    tower,
                    floor,
                    area,
                    description,
                    tech_id: techIdAsNumber
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Ordem de Serviço Aberta:', data);
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error.message);
        }
    };

    return (
        <div>
            <h2>Abrir Chamado de Ordem de Serviço</h2>
            <form onSubmit={handleOpenOrder}>
                <label>
                    Localização:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Torre:
                    <input
                        type="text"
                        value={tower}
                        onChange={(e) => setTower(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Andar:
                    <input
                        type="text"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Area:
                    <input
                        type="text"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Descrição:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Técnico:
                    <input
                        value={tech_id}
                        onChange={(e) => setTechId(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Abrir Chamado</button>
            </form>
        </div>
    );
};

export default OpenCorrective;
