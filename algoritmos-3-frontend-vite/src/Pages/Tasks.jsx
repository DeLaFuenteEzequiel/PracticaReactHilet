import React, { useEffect, useState } from "react";
import { searchTasks } from '../Services/Tasks.js'; // Importa el servicio para buscar tareas

function Tasks() {
  const [tableInfo, setTableInfo] = useState([]);

  const loadTableData = async () => {
    // Realiza una llamada a la función que obtiene las tareas (searchTasks)
    try {
      const rsp = await searchTasks(); // Asegúrate de que tu servicio devuelva los datos de las tareas
      setTableInfo(rsp); // Actualiza el estado con los datos de las tareas
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }

  useEffect(() => {
    loadTableData(); // Carga los datos de las tareas cuando el componente se monta
  }, []);

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Descripción de la Tarea</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tableInfo.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
              <td>
                <a className="btn btn-primary">Ver</a>
                <a className="btn btn-success">Modificar</a>
                <a className="btn btn-danger">Eliminar</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
