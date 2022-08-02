import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component{
    
    render() {
        const githubIcon = <FontAwesomeIcon icon={faGithub}/>
        return(
            <div id='footer'>
                <a id='gitHubIcon' href='https://github.com/AndrewLin95/shopping_site' target="_blank" rel='noreferrer'>{githubIcon}</a>
                <div id='attributeContainer'>
                    <div className='attribute'>Icons created by Freepik on Flaticon</div>
                    <div className='attribute'>Background created by @eberhardgross on unsplash.com</div>
                </div>
            </div>
        )
    }
}

export default Footer;