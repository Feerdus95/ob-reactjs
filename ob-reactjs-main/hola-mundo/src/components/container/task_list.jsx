import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState([true])

    //Control del ciclo de vida
    useEffect(()=>{
        console.log('Task state has been modified')
        setLoading(false)
        
        return() => {
            console.log('TaskList component will unmount...')
        }
    },[tasks]) 

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }

    return (
        <div>
            <div>
                <h1>
                    Your Tasks: 
                </h1>
                {/*TODO: => Aplicar for/Map para renderizar lista*/}
                <TaskComponent task={ defaultTask }></TaskComponent>
            </div>
        </div>
    );

}

export default TaskListComponent;