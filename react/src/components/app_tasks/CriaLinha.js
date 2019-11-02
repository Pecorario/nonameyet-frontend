import React from 'react';
import Icon from '../../assets/icons/Icon'

const CriaLinha = (props) => (
    <li className="linha"> 
        {props.task.name}
        <button onClick={() => {props.deletaLinha(props.task.id)}}>
            <Icon type="close" />
        </button>
        
        {props.task.status !== 2 && (
            <button onClick = {() => {props.mudaStatus(props.task.id)}}>
                <Icon type="next" />
            </button>
        )}
    </li>
);

export default CriaLinha;