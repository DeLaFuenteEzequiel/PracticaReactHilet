import { useEffect, useState } from "react";


import {searchTasks} from '../Services/Tasks.js';


const Tasks = () => {

    const [searchData, setSearchData] = useState({title:'',body:'', page:1});
    const [maxPage, setMaxPage] = useState(0);
    const [tableInfo, setTableInfo] = useState([]);


    const loadTableData = async () => {
        let rsp = await searchTasks(searchData);

        if(rsp?.Error === false){
            setTableInfo(rsp.Data.data);
            setMaxPage(rsp.Data.last_page);
        }else{
            window.alert('No se pudo cargar la informacion');
        }
    }

    useEffect(() => {
        loadTableData();
    }, [searchData])

    return(
        <div className="flex flex-col justify-center items-center">
            <div>
                <label htmlFor="">Nombre de tarea: </label>
                <input type="text" className="border-double border-4 border-sky-500 text-center mr-[1rem]" onChange={e => setSearchData({...searchData, user_name: e.target.value})}/>
                {
                    searchData.page != 1 && (<button className="mx-[.5rem] cursor-pointer" onClick={e => setSearchData({...searchData, page: searchData.page - 1})}>{'<-'}</button>)
                }
                {
                    maxPage != 1 && maxPage > searchData.page && (<button className="mx-[.5rem] cursor-pointer" onClick={e => setSearchData({...searchData, page: searchData.page + 1})}>{'->'}</button>)
                }
            </div>
            {
                    tableInfo.map((item, index) => {
                        console.log(item);
                        return(
                            <div key={index} className="w-[95vw] flex justify-evenly">
                                <span className="w-[1rem]">{item.id}</span>
                                <span className="w-[5rem]">{item.title}</span>
                                <span className="w-[5rem]">{item.body}</span>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Tasks;