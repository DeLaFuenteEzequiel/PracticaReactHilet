import { useEffect } from "react";
import { useState } from "react";
import { Create, Delete, Edit, Find, LoadTasks } from "../Services/Tasks";


const TaskList = (props) => {
    const [maxPage, setMaxPage] = useState(0);

    const [tasks, setTasks] = useState([]);
    const [tasksPage, setTasksPage] = useState({page: 1});
    const [searchId, setSearchId] = useState({id:0})
    const [data, setData] = useState({});
    const [editId, setEditId] = useState(0);
    const [editData, setEditData] = useState({});
    
    const loadTasks = async () => {
        let resp= await LoadTasks(tasksPage);
        console.log(resp);       
        if (resp?.Succes == true){
            setTasks(resp.Data.data);
            console.log(resp.Data.last_page);
            setMaxPage(resp.Data.last_page);
        }
    }

    useEffect(() => {
        loadTasks();
    }, [tasksPage])

    const handleCreate = async (e) => {
        e.preventDefault();
        console.log(data)
        let resp = await Create(data);
        if (resp?.Error){
            window.alert("Error");
        } else {
            window.alert("Exito");
        }
    }

    const handleEdit = async () => {
        setEditData({...editData, id:editId});
        console.log(editData);
        let resp= await Edit(editData);
        
        console.log(resp);
        if (resp?.Error === true){
            window.alert('Ha ocurrido un error');
        } else {
            window.alert("Exito");
            setEditId(0);
            setEditData({});
            loadTasks();
        }
    }
    const handleDelete = async (id) => {
        let data= {id:id}
        let resp= await Delete(data);
        if (resp?.Error){
            window.alert("Ha ocurrido un error");
        } else {
            window.alert("Exito");
            loadTasks();
        }
    }

    const handleSearch = async () => {
        let resp= await Find(searchId);
        console.log(resp);
        if (resp?.Succes)
            window.alert("Encontrado \n" + resp.Data.title + " " + resp.Data.body);
    }

    return (
        <>
            <div>
                <form >
                    <input onChange={(e) => setData({...data, title: e.target.value})} className="border-double border-4 border-sky-500 text-center" type="text" placeholder="Titulo" />
                    <input onChange={(e) => setData({...data, body: e.target.value})} className="border-double border-4 border-sky-500 text-center" type="text" placeholder="Cuerpo" />
                    <button onClick={(e) => handleCreate(e)} className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm" type="button">Crear</button>
                </form>
            </div>

            <div>
                <label htmlFor="">Buscar por ID</label>
                <input onChange={(e) => setSearchId({...searchId, id:e.target.value})} type="number" min={1} placeholder={0}/>
                <button onClick={handleSearch} className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm">Buscar</button>
            </div>

            <div>
                {tasks.length !== 0 ? 
                (<div>
                    {tasksPage.page != 1 && (<button className="mx-[.5rem] cursor-pointer" onClick={e => setTasksPage({...tasksPage, page: tasksPage.page - 1})}>{'<-'}</button>)}
                    {tasksPage.page}
                    {maxPage != 1 && maxPage > tasksPage.page && (<button className="mx-[.5rem] cursor-pointer" onClick={e => setTasksPage({...tasksPage, page: tasksPage.page + 1})}>{'->'}</button>)}
                    <ul>
                    {
                        tasks.map((item, key) => {
                            return(
                            <li key={key}>
                                {item.id !== editId ? (
                                    <>
                                        <button onClick={() => setEditId(item.id) } className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm">Editar</button>
                                        &emsp;
                                        <button onClick={() => handleDelete(item.id)} className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm">Eliminar</button>
                                        &emsp;
                                        {item.title}
                                        &emsp;
                                        {item.body}
                                    </>
                                ) : (
                                    <>
                                        <input onChange={(e) => setEditData({...editData, title:e.target.value})} type="text" placeholder={item.title}/>
                                        &emsp;
                                        <input onChange={(e) => setEditData({...editData, body:e.target.value})} type="text" placeholder={item.body}/>
                                        &emsp;
                                        <button onClick={handleEdit} className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm">Enviar</button>
                                        &emsp;
                                        <button onClick={() => setEditId(0)} className="text-sm text-white bg-sky-500 mt-[.7rem] py-[.3rem] px-[.6rem] rounded-sm">X</button>
                                    </>
                                )}
                            </li>)
                        })
                    }
                    </ul>
                </div>) 
                : (<p>No hay tareas</p>)}
            </div>

        </>
    );

}

export default TaskList;