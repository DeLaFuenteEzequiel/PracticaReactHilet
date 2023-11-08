import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import Inicio from './Layouts/Inicio.jsx';

import Tasks from './Pages/Tasks.jsx';
import CreateTasks from './Pages/CreateTasks.jsx';

const App = () => {
  const [availableRoutes, setAvailableRoutes] = useState([]);
  

  useEffect(() => {
    
      setAvailableRoutes([
        {
          path:'/',
          element: <Inicio />
        },
        {
          path:'/tasks',
          element: <Inicio children={<Tasks />} />
        },
        {
          path:'/create',
          element: <Inicio children={<CreateTasks />} />
        },
        
      ]);
    
  }, []);

  
  return (
    <div>
      
    <BrowserRouter>
      
      <Routes>
        {availableRoutes.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
