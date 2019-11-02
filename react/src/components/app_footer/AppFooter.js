import React from 'react'
import Icon from '../../assets/icons/Icon'

const AppFooter = () => {
    return(
    <div className="footer center">
        <div className="rodape center">
            <p>Made by Taynara Pecorario </p>
            <a href="https://github.com/Pecorario" target="_blank">
                <Icon type="git" />
            </a>
        </div>
    </div>
    );
}

export default AppFooter;