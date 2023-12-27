import React, { useState, useEffect } from "react";

const User = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        // Fetch para obter os dados dos usuários
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://192.168.15.21:8080/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error.message);
            }
        };

        fetchUsers();
    }, []); // Executado apenas uma vez no carregamento inicial

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://192.168.15.21:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password, 
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Usuário criado:', data);

            // Atualizar a lista de usuários após a criação bem-sucedida
            setUsers([...users, data]);
        } catch (error) {
            console.error('Erro ao criar usuário:', error.message);
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
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleCreateUser}>
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
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Cadastrar Usuário</button>
            </form>
        </div>
    );
};

export default User;
