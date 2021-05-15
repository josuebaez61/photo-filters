import React from 'react'
import './Editor.scss'
import FiltersSidebar from '../../components/FiltersSidebar/FiltersSidebar'
import Image from '../../assets/images/home/home-bg-3.jpg';
import PresetsSidebar from '../../components/PresetsSidebar/PresetsSidebar';

const Editor = () => {
    return (
        <main className="p-grid p-nogutter editor">
            <div className="p-col-1">
                <PresetsSidebar />
            </div>
            <div className="p-col-9 p-d-flex p-justify-center p-align-center" style={{ height: '100%'}}>
                <div className="editor__image-container">
                    <img className="p-w-100" src={ Image } alt="" />
                </div>
            </div>
            <FiltersSidebar />
        </main>
    )
}

export default Editor
