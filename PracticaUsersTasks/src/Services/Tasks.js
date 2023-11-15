import { DELETE, GET, PATCH, POST } from "./Httpr";

const user_id = 4;

export async function Create(data){
    const url= 'task/create';
    data= {...data, usr_id: user_id};
    let resp= await POST(url, data);
    return resp;
}

export async function Find(search_params){
    const url= 'task/get';
    let resp= await GET(url, search_params);
    return resp;
}

export async function LoadTasks(search_params){
    const url= 'task/getList';
    let resp= await GET(url, search_params);
    return resp;
}

export async function Edit(data){
    const url= 'task/edit';
    let resp= await PATCH(url, data);
    return resp;
}

export async function Delete(id){
    const url= 'task/delete';
    let resp= await DELETE(url, id);
    return resp;
}