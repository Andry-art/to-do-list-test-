import './Task.css'
import React from 'react'

const Task = ({task, ...props}) => {

  
  
    
        return <>
        <div className = 'task' >
             <p className='item' onClick={props.showForm} >{task.title}</p>
             
            <div className="done" onClick={props.deleteTask}>
                <div className="cl-btn-2">
             <div>
             <div className="leftright"></div>
             <div className="rightleft"></div>
             </div>
                </div>
            </div>
        </div>
        <p className="tegs">Tegs</p>
        </>
    }
    
    export default Task;