import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component{
    
    render() {
        const githubIcon = <FontAwesomeIcon icon={faGithub}/>
        return(
            <div id='footer'>
                <a href='https://github.com/AndrewLin95/shopping_site' target="_blank" rel='noreferrer'>{githubIcon}</a>
            </div>
        )
    }
}

export default Footer;