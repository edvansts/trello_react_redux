import React from 'react'
import './Footer.css'

export default props => {
    return(
        <div className="Footer">
            <span> Desenvolvido com  
            <svg style={{color:'red'}} className="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
                 por <strong>Edvan</strong> </span>
        </div>
    )
}