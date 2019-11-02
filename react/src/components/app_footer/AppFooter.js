import React from 'react'
import Icon from '../../assets/icons/Icon'

const AppFooter = () => {
    return(
    <div className="footer center">
        <span>Made by Taynara Pecorario</span>
        <a href="https://github.com/Pecorario" target="_blank">
            <Icon type="git" />
        </a>
    </div>
    );
}

export default AppFooter;