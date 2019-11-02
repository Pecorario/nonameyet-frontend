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
		if(task){
			const novaTarefa = {
				id: id(),
				name: task,
				status: 0
			}
			LocalStorage.save(novaTarefa)
			this._loadData()
		} else {
			alert('Você precisa escrever alguma coisa, meu anjo')
		}
	}

	mudaStatus = (id) => {
		LocalStorage.change(id)
		this._loadData()
	}

	deletaLinha = (id) => {
		LocalStorage.remove(id)
		this._loadData()
	}

	limpaPagina = () => {
		LocalStorage.clear()
		this._loadData()
	}

	_loadData () {
		this.setState({list: LocalStorage.load()})
	}

	componentWillMount () {
		this._loadData()
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
				<AppHeader clear={this.limpaPagina} retornaTarefa={this.salvaTarefas} />

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
