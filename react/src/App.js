import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			<div className="header">
				<div className="logo">
					<a href="https://www.unect.com.br/" target="_blank">
						<img src="assets/logo.svg" alt="Unect"/>        
					</a>
				</div>
		
				<div>
					<h1>TODO APP</h1>
				</div>
			</div>

			<div className="add-item">
				<div className="items">
					<input className="input" type="text" placeholder="Adicione uma nova tarefa"/>
				</div>

				<div className="items">
					<img src="assets/add.svg" alt="Adicionar" className="add"/>
				</div>
			</div>

			<div className="flexbox">
				<div className="blocos">
					<div className="titulo">
						<div className="titulo-texto">
							<h2>TO DO</h2>
						</div>

						<div className="titulo-img">
							<img src="assets/todo.svg" alt="Lista de Tarefas" className="imagem"/>
						</div>
					</div>

					<ul className="coluna todo">
						<li> 
							<img src="assets/close.svg" alt="Fechar" className="close"/>
							<p>Testando</p>
							<img src="assets/next.svg" alt="Passar" className="next"/>
						</li>
					</ul>                      
				</div>
		
				<div className="blocos">
					<div className="titulo">
						<div className="titulo-texto">
							<h2>DOING</h2>
						</div>

						<div className="titulo-img">
							<img src="assets/doing.svg" alt="Relógio" className="imagem"/>
						</div>
					</div>

					<ul className="coluna doing">
						<li> 
							<img src="assets/close.svg" alt="Fechar" className="close"/>
							<p>Testando</p>
							<img src="assets/next.svg" alt="Passar" className="next"/>
						</li>
					</ul>       
				</div>

				<div className="blocos">
					<div className="titulo">
						<div className="titulo-texto">
							<h2>DONE</h2>
						</div>

						<div className="titulo-img">
							<img src="assets/done.svg" alt="Check" className="imagem"/>
						</div>
					</div>

					<ul className="coluna done">
						<li> 
							<img src="assets/close.svg" alt="Fechar" className="close"/>
							<p>Testando</p>
						</li>
					</ul>  
				</div>
			</div>
		
			<footer>
				<div className="rodape">
					<p>Made by Taynara Pecorario</p>
				</div>

				<div>
					<a href="https://github.com/Pecorario" target="_blank">
						<img src="assets/git.svg" alt="Perfil do GitHub" className="git"/>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
