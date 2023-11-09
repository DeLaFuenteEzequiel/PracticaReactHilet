import React, { useEffect, useState } from "react";
import { searchTasks, getTaskById, deleteTask, updateTaskData } from '../Services/Tasks.js';

function Tasks() {
  const [tableInfo, setTableInfo] = useState([]);

  const [selectedTask, setSelectedTask] = useState(null); 
  const [showDetail, setShowDetail] = useState(false); 

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 
  const [editedDescription, setEditedDescription] = useState('');

  const loadTableData = async () => {
    
    try {
      const rsp = await searchTasks(); 
      console.log(rsp);
      setTableInfo(rsp); 
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }

  useEffect(() => {
    loadTableData(); 
  }, []);


  const handleViewTask = async (taskId) => {
    try {
      const response = await getTaskById(taskId);
      if (response) {
        setSelectedTask(response); 
        setShowDetail(true); 
      } else {
        console.error("Tarea no encontrada");
      }
    } catch (error) {
      console.error("Error al cargar la tarea:", error);
    }
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedTask(null); 
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await deleteTask(taskId);
      if (response) {
        loadTableData();
      } else {
        console.error("Error al eliminar la tarea");
      }
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
    const taskToEdit = tableInfo.find((task) => task.id === taskId);
    setEditedDescription(taskToEdit.description);
  };

  const handleSaveTask = async () => {
    try {
      const response = await updateTaskData(selectedTask.id, {
        description: editedDescription,
      });

      if (response) {
        setSelectedTask({
          ...selectedTask,
          description: editedDescription,
        });

        setIsEditing(false);
      } else {
        console.error('Error al guardar la tarea');
      }
    } catch (error) {
      console.error('Error al guardar la tarea:', error);
    }
  };

  const handleUpdateTask = async (taskId) => {
    try {
      const response = await updateTaskData(taskId, { description: editedDescription });
  
      if (response) {
        // Actualizar el estado de la tabla después de la modificación
        setTableInfo((prevTableInfo) =>
          prevTableInfo.map((task) =>
            task.id === taskId ? { ...task, description: editedDescription } : task
          )
        );
        // Restablecer el estado de edición
        setEditingTaskId(null);
      } else {
        console.error('Error al modificar la tarea');
      }
    } catch (error) {
      console.error('Error al modificar la tarea:', error);
    }
  };

  


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
           <td>
             {editingTaskId === task.id ? (
               <input
                 type="text"
                 value={editedDescription}
                 onChange={(e) => setEditedDescription(e.target.value)}
               />
             ) : (
               task.description
             )}
           </td>
           <td>
             {editingTaskId === task.id ? (
               <button
                 className="btn btn-success"
                 onClick={() => handleUpdateTask(task.id)}
               >
                 Guardar
               </button>
             ) : (
               <button
                 className="btn btn-success"
                 onClick={() => handleEditTask(task.id)}
               >
                 Modificar
               </button>
             )}
             <button
               className="btn btn-primary"
               onClick={() => handleViewTask(task.id)}
             >
               Ver
             </button>
             <button
               className="btn btn-danger"
               onClick={() => handleDeleteTask(task.id)}
             >
               Eliminar
             </button>
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

          {showDetail && (
        <div className="row">
          <div className="col">
            <h2>Detalles de la Tarea</h2>
            <p>ID: {selectedTask.id}</p>
            <p>Descripción: {selectedTask.description}</p>
            <button className="btn btn-primary" onClick={handleCloseDetail}>
              Cerrar Detalles
            </button>
          </div>
        </div>
      )}

        </html>
  );
}

export default Tasks;
