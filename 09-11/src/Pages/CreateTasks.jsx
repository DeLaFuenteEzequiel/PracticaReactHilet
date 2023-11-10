import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { createTasks } from '../Services/Tasks.js';


const CreateTasks = () => {

    const [formData, setFormData] = useState({});
    const [success, setSucces] = useState(false);


    const submmitHandler = async () => {

        let rsp = await createTasks(formData);

        if(rsp?.Error === false){
            window.alert('Tarea creada correctamente');
            setSucces(true);
        }else{
            window.alert('Error al crear la tarea');
        }
    }

    return(
        <section className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            {
                success && (<Navigate to='/createTasks' replace={true} />)
            }
            <label htmlFor="" className="text-sm text-gray-700">Id user</label>
            <input type="text" className="border-double border-4 border-sky-500 text-center" onChange={e => setFormData({...formData, usr_id: e.target.value})}/>
            <label htmlFor="" className="text-sm text-gray-700">New Task name</label>
            <input type="text" className="border-double border-4 border-sky-500 text-center" onChange={e => setFormData({...formData, title: e.target.value})}/>
            <label htmlFor="" className="text-sm text-gray-700 mt-[.6rem]">New Task description</label>
            <input type="text" className="border-double border-4 border-sky-500 text-center"onChange={e => setFormData({...formData, body: e.target.value})}/>
            <button className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm" onClick={submmitHandler}>Crear</button>
        </section>
    );
}

export default CreateTasks;
