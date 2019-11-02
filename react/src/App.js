import React from 'react';
import './App.css';
import Icon from './assets/icons/Icon'

function App() {
	return (
		<div>
			<div className="header">		
				<h1>TODO APP</h1>

				<div className="add-item center">
						<input className="input " type="text" placeholder="Adicione uma nova tarefa"/>
						<button><Icon type="add" /></button>
				</div>
			</div>

			<div className="flexbox center">
				<div className="blocos">
					<h2>
						TO DO
						<Icon type="todo" />
					</h2>

					<ul className="coluna todo">
						<li> 
							Testando
							<Icon type="close" />
							<Icon type="next" />
						</li>
						<li> 
							Testando
							<Icon type="close" />
							<Icon type="next" />
						</li>
					</ul>                      
				</div>
		
				<div className="blocos">
					<h2>
						DOING
						<Icon type="doing" />
					</h2>

					<ul className="coluna doing">
						<li> 
							Testando
							<Icon type="close" />
							<Icon type="next" />
						</li>
					</ul>       
				</div>

				<div className="blocos">
					<h2>
						DONE
						<Icon type="done" />
					</h2>

					<ul className="coluna done">
						<li> 
							Testando
							<Icon type="close" />
						</li>
					</ul>  
				</div>
			</div>
		
			<div className="footer center">
				<div className="rodape center">
					<p>Made by Taynara Pecorario </p>
					<a href="https://github.com/Pecorario" target="_blank">
						<Icon type="git" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
