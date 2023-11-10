import { POST, GET, DELETE,PATCH } from '../Services/Httpr.js';


export const createTasks = async (new_task_data) => {
    let url = 'task/create';
    let rsp = await POST(url,new_task_data);
    return rsp;
}

export const searchTasks = async (search_params) => {
    let url = 'task/getList';
    let rsp = await GET(url, search_params);

    return rsp;
}

export const getTaskById = async (taskId) => {
    let url = `task/get${taskId}`;
    let response = await GET(url);
    return response;
  };

  
  export const deleteTask = async (taskId) => {
    let url = `task/delete${taskId}`; 
    let response = await DELETE(url);
    return response;
  };
  
  export const updateTaskData = async (taskId, updateTaskData) => {
    let url = `task/edit/${taskId}`; 
    let response = await PATCH(url, updateTaskData);
    return response;
  };

