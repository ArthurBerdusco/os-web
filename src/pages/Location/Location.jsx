import React, { useState } from "react";

const Location = () => {
  const [buildings, setBuildings] = useState([]);
  const [floors, setFloors] = useState([]);
  const [areas, setAreas] = useState([]);

  const addBuilding = (name, address) => {
    const newBuilding = { id: buildings.length + 1, name, address, floors: [] };
    setBuildings([...buildings, newBuilding]);
  };

  const addFloor = (buildingId, number, description) => {
    const newFloor = { id: floors.length + 1, buildingId, number, description, areas: [] };
    setFloors([...floors, newFloor]);

    // Atualizar o edifício com o novo andar
    setBuildings((prevBuildings) =>
      prevBuildings.map((building) =>
        building.id === buildingId
          ? { ...building, floors: [...building.floors, newFloor] }
          : building
      )
    );
  };

  const addArea = (floorId, name, type) => {
    const newArea = { id: areas.length + 1, floorId, name, type };
    setAreas([...areas, newArea]);

    // Atualizar o andar com a nova área
    setFloors((prevFloors) =>
      prevFloors.map((floor) =>
        floor.id === floorId ? { ...floor, areas: [...floor.areas, newArea] } : floor
      )
    );
  };

  return (
    <div>
    <h2>Buildings</h2>
    <ul>
      {buildings && buildings.map((building) => (
        <li key={building.id}>
          {`${building.name} - ${building.address}`}
          <ul>
            {building.floors && building.floors.map((floor) => (
              <li key={floor.id}>{`${floor.number} - ${floor.description}`}
              
              <ul>
      {areas && areas.map((area) => (
        <li key={area.id}>{`${area.name} - ${area.type}`}</li>
      ))}
    </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>

    <h2>Areas</h2>
    <ul>
      {areas && areas.map((area) => (
        <li key={area.id}>{`${area.name} - ${area.type}`}</li>
      ))}
    </ul>

      <h2>Add Building</h2>
      <button onClick={() => addBuilding("New Building", "123 Main St")}>
        Add Building
      </button>

      <h2>Add Floor</h2>
      <button onClick={() => addFloor(1, 1, "Ground Floor")}>Add Floor</button>

      <h2>Add Area</h2>
      <button onClick={() => addArea(1, "Office", "Office")}>Add Area</button>
    </div>
  );
};

export default Location;
