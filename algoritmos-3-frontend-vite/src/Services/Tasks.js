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

