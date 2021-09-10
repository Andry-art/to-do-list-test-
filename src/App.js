import React from 'react'
import Task from './components/task'
import TaskInput from './components/TaskInput'
import CorectForm from './components/CorectForm';
import './App.css';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
         tasks: [{id:0, title: 'Create to do list', },
                 {id:1, title: 'Buy something', },
                 {id:2, title: 'Read book',  },
                ] ,
         showCorectForm: false,
         selectTask: '',         
    };
  }


  deleteTask = id => {
      const index = this.state.tasks.map(task => task.id).indexOf(id)
      this.setState( state => {
          let {tasks} = state;
          return {tasks : tasks.filter((task,i,ar) => task !== ar[index])}  
          
      })
  }


  addTask = (task) =>{
    console.log(task)
    this.setState(state => {
         let {tasks} = state;
      
     return{ tasks:[ ...tasks, {
          id: tasks.length !== 0 ? tasks.length : 0,
          title: task,
      }]
  }
      })
  }

  corectTask = (text) => {
    console.log(text.text)
    const index = this.state.tasks.map(task => task.id===text.id).indexOf(true)
    this.setState(state => {
      return this.state.tasks[index].title = text.text
    })
   this.hideCorect()
  }


  showForm (id) {
    this.showCorect(id);
    this.handlSelectTask(id);
  }

  showCorect= id =>{
    const index = this.state.tasks.map(task => task.id).indexOf(id)
    this.setState({showCorectForm: true}) 
  }

  handlSelectTask = (id) =>{
    const index = this.state.tasks.map(task => task.id).indexOf(id)
    this.setState({selectTask :
     { id: this.state.tasks[index].id,
      title : this.state.tasks[index].title}})
   }


  hideCorect(){
    
    this.setState({showCorectForm: false})
  }

 

  render(){
     const {tasks} = this.state;
     const active = tasks.filter(task => !task.done);
     const done = tasks.filter(task => task.done)
    //  console.log(this.state.selectTask)
      return <> 
      
      <div className = "form"> 
          <div className = "back">
           <h1 className = "title">Active tasks: {active.length} </h1>
           
           </div>
           {tasks.map(task => (<Task 
           showForm = {()=>this.showForm(task.id)}
           deleteTask={()=> this.deleteTask(task.id)}
            task={task} key={task.id}
            ></Task>))}
            
             <TaskInput addTask={this.addTask}/>
      </div>

      {this.state.showCorectForm && 
      (<CorectForm hideCorect={()=>this.hideCorect()} 
      corectTask = {this.corectTask} 
       selectTask={this.state.selectTask} />)}
      </>
  }
}

export default App ;

