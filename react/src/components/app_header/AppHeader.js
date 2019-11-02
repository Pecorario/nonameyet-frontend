import React from 'react';
import Icon from './../../assets/icons/Icon';

const AppHeader = () => {
    return(
        <div className="app-header">		
            <h1>TODO APP</h1>

            <div className="add-item center">
                <input className="input " type="text" placeholder="Adicione uma nova tarefa"/>
                <button><Icon type="add" /></button>
            </div>
        </div> 
    );
};

export default AppHeader;
