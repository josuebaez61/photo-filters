import React, { useEffect, useState } from 'react'
import AppLogo from '../../components/AppLogo/AppLogo';
import './Home.scss'
import { Button } from 'primereact/button';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const Home = () => {

    const [bgFilter, setBgFilter] = useState('none');

    useEffect(() => {
        setTimeout(() => {
            setBgFilter('blur(4px)')
        }, 500)
    }, [])

    return (
        <div>
            <div className="blur-background" style={{
                filter: bgFilter
            }}></div>
            <div className="home">
                <main className="home__container  animate__animated animate__fadeIn">
                    <article className="p-grid p-align-center" style={{ height: '100%' }}>
                        <div className="p-col-12">
                            <AppLogo />
                        </div>
                        <div className="p-col-12 p-text-center">
                            <Button label="Comenzar" className="p-button-rounded p-button-lg" />
                        </div>
                    </article>
                </main>
            </div>
        </div>
    )
}

export default Home
