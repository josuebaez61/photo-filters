import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './AppLogo.scss'

const AppLogo = () => {
    return (
        <div className="app-logo">
            <FontAwesomeIcon className="app-logo__icon" icon={ faCameraRetro } />
            <h1 className="app-logo__title">Photo Filters</h1>
        </div>
    )
}

export default AppLogo
