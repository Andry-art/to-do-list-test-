import './CorectForm.css'
import React from 'react'

class CorectForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.selectTask.id,
            text: this.props.selectTask.title,
        }
    }     

    corectInput(event){
        this.setState({text: event.target.value})
    }

    corecTask = () => {
    this.props.corectTask(this.state)  
        
    }

    render(){
        // console.log(this.state.text)
        return<>
        <div className="corect">
        <textarea type='text' value={this.state.text} onChange = {()=>this.corectInput(event)} ></textarea>
        <button onClick={this.corecTask}>Save</button>
        </div>
        </>
    }
}


export default CorectForm