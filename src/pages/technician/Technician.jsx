import React, { useState, useEffect } from "react";

const Technician = () => {
    const [technicians, setTechnicians] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Fetch para obter os dados dos técnico
        const fetchTechnicians = async () => {
            try {
                const response = await fetch('http://192.168.15.21:8080/technicians');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setTechnicians(data.technicians);
            } catch (error) {
                console.error('Erro ao buscar técnicos:', error.message);
            }
        };

        fetchTechnicians();
    }, []); 

    const handleCreateTechnician = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://192.168.15.21:8080/technicians', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Técnico criado:', data);

            // Atualizar a lista de técnicos após a criação bem-sucedida
            setTechnicians([...technicians, data]);
        } catch (error) {
            console.error('Erro ao criar técnico:', error.message);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians && technicians.map((technician) => (
                        <tr key={technician.id}>
                            <td>{technician.id}</td>
                            <td>{technician.name}</td>
                            <td>{technician.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleCreateTechnician}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button type="submit">Cadastrar Técnico</button>
            </form>
        </div>
    );
};

export default Technician;
