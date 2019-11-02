import React from 'react';
import Icon from '../../assets/icons/Icon'

const CriaLinha = (props) => (
    <li className="linha"> 
        {props.task.name}
        <Icon type="close" />
		<Icon type="next" />
    </li>
);

export default CriaLinha;