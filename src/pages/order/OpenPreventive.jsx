import React, { useState } from "react";

const OpenPreventive = () => {
    const [preventives, setPreventives] = useState([]);
    const [currentPreventive, setCurrentPreventive] = useState({
        location: "",
        tower: "",
        floor: "",
        area: "",
        description: "",
        technicianId: 1, // Substitua pelo ID do técnico adequado
        maintenancePlanId: 1, // Substitua pelo ID do plano de manutenção adequado
        tasks: [],
    });

    const handlePreventiveChange = (e) => {
        setCurrentPreventive({
            ...currentPreventive,
            [e.target.name]: e.target.value,
        });
    };

    const addTask = (preventiveIndex) => {
        const updatedPreventives = [...preventives];
        updatedPreventives[preventiveIndex].tasks.push({
            description: currentPreventive.description,
            status: "OK",
        });
        setPreventives(updatedPreventives);
        // Limpar a descrição após adicionar a tarefa
        setCurrentPreventive({
            ...currentPreventive,
            description: "",
        });
    };

    const addPreventive = () => {
        setPreventives([...preventives, currentPreventive]);
        setCurrentPreventive({
            location: "",
            tower: "",
            floor: "",
            area: "",
            description: "",
            technicianId: 1,
            maintenancePlanId: 1,
            tasks: [],
        });
    };

    const submitPreventives = () => {
        console.log("Ordens de Serviço Preventivas:", preventives);
    };

    return (
        <div>
            <h2>Criar Ordem de Serviço Preventiva</h2>
            <h3>Adicionar Preventiva</h3>
            <form>
                <label>
                    Local:
                    <input
                        type="text"
                        name="location"
                        value={currentPreventive.location}
                        onChange={handlePreventiveChange}
                    />
                </label>
            </form>
            <button type="button" onClick={addPreventive}>
                Adicionar preventiva
            </button>

            {/* Formulário de Ordem de Serviço Preventiva */}

            {/* Adicione outros campos do formulário conforme necessário */}

            {/* Formulário de Tarefas */}

            <ul>
                {preventives.map((preventive, preventiveIndex) => (
                    <form>
                        <li key={preventiveIndex}>
                            {preventive.location}
                            <br />
                            <button type="button" onClick={() => addTask(preventiveIndex)}>
                                Adicionar Tarefa
                            </button>
                            <input
                                type="text"
                                name="description"
                                value={currentPreventive.description}
                                onChange={handlePreventiveChange}
                            />
                            <ul>
                                {preventive.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>
                                        <label>
                                            Descrição da Tarefa: {task.description}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </form>
                ))}
            </ul>

            {/* Botão para enviar as Ordens de Serviço Preventivas */}
            <button type="button" onClick={submitPreventives}>
                Enviar Ordens de Serviço Preventivas
            </button>
            <div>
                <h3>Preventivas Adicionadas:</h3>
                {preventives.map((preventive, index) => (
                    <div key={index}>
                        <p>Local: {preventive.location}</p>
                        {/* Adicione outras informações da preventiva conforme necessário */}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default OpenPreventive;
