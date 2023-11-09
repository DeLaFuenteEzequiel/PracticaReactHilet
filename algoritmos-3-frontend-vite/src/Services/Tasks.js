import { POST, GET, DELETE,PATCH } from '../Services/Httpr.js';


export const createTasks = async (new_tasks_data) => {
    let url = '/create';
    let rsp = await POST(url, new_tasks_data);
    return rsp;
}

export const searchTasks = async (search_params) => {
    let url = '/tasks';
    let rsp = await GET(url, search_params);

    return rsp;
}

export const getTaskById = async (taskId) => {
    let url = `/tasks/${taskId}`;
    let response = await GET(url);
    return response;
  };

  
  export const deleteTask = async (taskId) => {
    let url = `/delete/${taskId}`; 
    let response = await DELETE(url);
    return response;
  };
  
  export const updateTaskData = async (taskId, updateTaskData) => {
    let url = `/update/${taskId}`; 
    let response = await PATCH(url, updateTaskData);
    return response;
  };

