import React, { useEffect, useState } from "react";
import { searchTasks } from '../Services/Tasks.js'; // Importa el servicio para buscar tareas

function Tasks() {
  const [tableInfo, setTableInfo] = useState([]);

  const loadTableData = async () => {
    // Realiza una llamada a la función que obtiene las tareas (searchTasks)
    try {
      const rsp = await searchTasks(); 
      console.log(rsp);// Asegúrate de que tu servicio devuelva los datos de las tareas
      setTableInfo(rsp); // Actualiza el estado con los datos de las tareas
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }

  useEffect(() => {
    loadTableData(); // Carga los datos de las tareas cuando el componente se monta
  }, []);

  return (
    
    <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
              integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
              crossOrigin="anonymous"
            />
            
          </head>
          <body>
            <h1>Lista de Tareas</h1>
           
            <div className="container">
              <div className="row">
                <div className="col">
               
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Descripcion de la Tarea</th>
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
                        </div>
                      </div>
                      
    
                      
            <script
              src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
              crossOrigin="anonymous"
            ></script>
          </body>
        </html>
  );
}

export default Tasks;
