import { Link } from "react-router-dom";



const BaseLayout = (props) => {

    return(
        <section className="w-[100vw] flex justify-center">
            <menu className="w-[100vw] h-[3rem] absolute bg-slate-500 shadow-sm flex justify-evenly items-center text-white">
                <Link to='/users' replace={true}>Buscar Usuarios</Link>
                <Link to='/createUser' replace={true}>Crear Usuarios</Link>
                <Link to='/createTasks' replace={true}>Crear Tareas</Link>
                <Link to='/tasks' replace={true}>Tareas</Link>
                <Link to='/editDeleteTasks' replace={true}>Edicion de Tareas</Link>

            </menu>
            <div className="mt-[4rem]">
                {props.children}
            </div>
        </section>
    );
}

export default BaseLayout;