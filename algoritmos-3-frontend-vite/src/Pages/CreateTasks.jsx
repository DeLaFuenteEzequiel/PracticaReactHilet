import { useEffect, useState } from "react";
import { createTasks } from '../Services/Tasks.js';


const CreateTasks = () => {

  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

   
    const newTaskData = {
      description: description,
    };

    try {
      
      const response = await createTasks(newTaskData);

      
      console.log("Tarea creada con éxito", response);
    } catch (error) {
      console.error("Error al crear la tarea", error);
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
            <h1>Nueva Tarea</h1>
           
            <div className="container">
              <div className="row">
                <div className="col">
               
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="descripcion"  >Descripcion</label>
                        <input type="text" class="form-control" id="descripcion"  value={description} onChange={handleDescriptionChange} />
                        
                    </div>
                   
                    
                    <button type="submit" class="btn btn-primary">Agregar Tarea</button>
                </form>

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
    };

export default CreateTasks;
