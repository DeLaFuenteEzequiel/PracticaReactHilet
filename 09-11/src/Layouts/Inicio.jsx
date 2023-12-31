import { Link } from "react-router-dom";

const Inicio = (props) => {
    return (
        <section className="w-[100vw] flex justify-center">
            <menu className="w-[100vw] h-[3rem] absolute bg-slate-500 shadow-sm flex justify-evenly items-center text-white">
                <Link to='/tasks' replace={true}>Tareas</Link>
                <Link to='/createTasks' replace={true} >Agregar Tarea</Link>
               
            </menu>
            <div className="mt-[4rem]">
                {props.children}
            </div>
        </section>
    );
}

export default Inicio;
