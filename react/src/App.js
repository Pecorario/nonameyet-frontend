import React, {Component} from 'react';
import './App.css';
import Icon from './assets/icons/Icon'
import CriaLinha from './components/app_tasks/CriaLinha';
import AppHeader from './components/app_header/AppHeader';
import AppFooter from './components/app_footer/AppFooter';
import id from 'uuid';
import LocalStorage from './services/LocalStorage';

class App extends Component {
	
	state = {
		list: []
	}

	salvaTarefas = (task) => {
		const {list} = this.state
		const novaTarefa = {
			id: id(),
			name: task,
			status: 0
		}
		LocalStorage.save(novaTarefa)
		this.setState({list: [ ...list, novaTarefa]})
	}

	mudaStatus = (id) => {
		const { list } = this.state
		const updateLista = list.map(task => {
			if(task.id === id)
				task.status = task.status + 1
			return task
		})
		this.setState({list: updateLista})
	}

	deletaLinha = (id) => {
		const { list } = this.state
		const updateLista = list.filter(task => {
			return task.id !== id
		})
		this.setState({list: updateLista})
	}

	componentWillMount(){
		this.setState({list: LocalStorage.load()})
	}

	render () {

		const { list } = this.state

		const todoColuna = list.map(task => {
			return (task.status === 0) 
				&& (<CriaLinha 
					deletaLinha={this.deletaLinha}
					mudaStatus={this.mudaStatus}
					key={task.id}
					task={task}
				/>)
		})

		const doingColuna = list.map(task => {
			return (task.status === 1) 
				&& (<CriaLinha 
					deletaLinha={this.deletaLinha}
					mudaStatus={this.mudaStatus}
					key={task.id}
					task={task} 
				/>)
		})

		const doneColuna = list.map(task => {
			return (task.status === 2) 
			&& (<CriaLinha 
				deletaLinha={this.deletaLinha}
				key={task.id}
				task={task}
			/>)
		})

		return(
			<div className="App">
				<AppHeader retornaTarefa={this.salvaTarefas}/>

				<div className="flexbox center">

					<div className="blocos">
						<h2>
							TO DO
							<Icon type="todo" />
						</h2>

						<ul className="coluna todo">
							{todoColuna}
						</ul>       
					</div>

					<div className="blocos">
						<h2>
							DOING
							<Icon type="doing" />
						</h2>

						<ul className="coluna doing">
							{doingColuna}
						</ul>       
					</div>

					<div className="blocos">
						<h2>
							DONE
							<Icon type="done" />
						</h2>

						<ul className="coluna done">
							{doneColuna}
						</ul>  
					</div>

				</div>
				
				<AppFooter />
			
			</div>
		);
		
	}
}

export default App;
