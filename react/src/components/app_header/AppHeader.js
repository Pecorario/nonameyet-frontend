import React, { Component} from 'react';
import Icon from './../../assets/icons/Icon';

class AppHeader extends Component {
    state = {tarefaInput:''}

    handleInput = (e) => { this.setState({tarefaInput: e.target.value}) }
    handleClick = () => {
        const {tarefaInput} = this.state;
        this.setState({tarefaInput: ''})
        this.props.retornaTarefa(tarefaInput)
    }

    render () {
        const {tarefaInput} = this.state;
        return(
            <div className="app-header">		
            <h1>TODO APP</h1>

            <div className="add-item center">
                    <input value={tarefaInput} onChange={this.handleInput} className="input " type="text" placeholder="Adicione uma nova tarefa"/>
                    <button onClick={() => {this.handleClick()}}><Icon type="add" /></button>
            </div>
        </div> 
        );
    }

}

export default AppHeader;
