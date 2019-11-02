import React, {Component} from 'react';
import './App.css';
import Icon from './assets/icons/Icon'
import CriaLinha from './components/app_tasks/CriaLinha';
import AppHeader from './components/app_header/AppHeader';
import AppFooter from './components/app_footer/AppFooter';

class App extends Component {
	
	state = {
		list: [{
			id: 0,
			name: 'make todo',
			status: 0
		},{
			id: 1,
			name: 'learn git',
			status: 0
		},{
			id: 3,
			name: 'learn js',
			status: 0
		},{
			id: 4,
			name: 'Learn DS in C',
			status: 1
		},{
			id: 5,
			name: 'Learn React',
			status: 1
		},{
			id: 6,
			name: 'Homework',
			status: 2
		}]
	}

	render () {

		const { list } = this.state

		const todoColuna = list.map(task => {
			return (task.status === 0) && (<CriaLinha task={task} />)
		})

		const doingColuna = list.map(task => {
			return (task.status === 1) && (<CriaLinha task={task} />)
		})

		const doneColuna = list.map(task => {
			return (task.status === 2) && (<CriaLinha task={task} />)
		})

		return(
			<div className="App">
				<AppHeader />

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
