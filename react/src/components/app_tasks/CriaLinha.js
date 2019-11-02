import React from 'react';
import Icon from '../../assets/icons/Icon'

const CriaLinha = (props) => (
    <li className="linha"> 
        {props.task.name}
        <Icon type="close" onClick={() => {props.deletaLinha(props.task.id)}}/>
        
        {props.task.status !== 2 && (
            <Icon type="next" onClick = {() => {props.mudaStatus(props.task.id)}}/>
        )}
    </li>
);

export default CriaLinha;