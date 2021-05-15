import React, { useEffect } from 'react'
import './Editor.scss'
import FiltersSidebar from '../../components/FiltersSidebar/FiltersSidebar'
import Image from '../../assets/images/home/home-bg-3.jpg';
import PresetsSidebar from '../../components/PresetsSidebar/PresetsSidebar';
import { useSelector } from 'react-redux';

const Editor = () => {

    const { brightness, contrast, grayscale, hue_rotate, invert, opacity, saturate, sepia } = useSelector((state:any) => state.filters)

    useEffect(() => {
        console.log('brightness',brightness, 'contrast',contrast, 'grayscale',grayscale, 'hue_rotate',hue_rotate, 'invert',invert, 'opacity',opacity, 'saturate',saturate, 'sepia',sepia)
    }, [brightness, contrast, grayscale, hue_rotate, invert, opacity, saturate, sepia])

    return (
        <main className="p-grid p-nogutter editor">
            <div className="p-col-1">
                <PresetsSidebar />
            </div>
            <div className="p-col-9 p-d-flex p-justify-center p-align-center" style={{ height: '100%'}}>
                <div className="editor__image-container">
                    <img className="p-w-100" src={ Image } 
                        style={{
                            // filter: `brightness(${brightness}%)`
                            filter: `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue_rotate}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)`
                            // filter: `hue-rotate(${hue_rotate}%) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)`
                        }}
                        alt="" 
                    />
                </div>
            </div>
            <div className="p-col-2">
                <FiltersSidebar />
            </div>
        </main>
    )
}

export default Editor
