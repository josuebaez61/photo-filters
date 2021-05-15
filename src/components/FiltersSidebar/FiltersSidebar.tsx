import React, { useState } from 'react'
import './FiltersSidebar.scss'
import { Slider } from 'primereact/slider';
import FilterControl from './FilterControl/FilterControl';
import { Button } from 'primereact/button';
import { changeBrightness, changeContrast, changeGrayscale, changeHueRotate, changeInvert, changeOpacity, changeSaturate, changeSepia } from '../../store/actions/filtersActions';

const FiltersSidebar = () => {
    return (
        <aside className="p-p-3 tools-sidebar">
            <h3>Filtros</h3>
            <FilterControl filter="brightness" action={ changeBrightness } label="Brillo" />
            <FilterControl filter="contrast" action={ changeContrast } label="Contraste" />
            <FilterControl filter="grayscale" action={ changeGrayscale } label="Escala de grises" />
            <FilterControl filter="hue_rotate" action={ changeHueRotate } label="Tono" />
            <FilterControl filter="invert" action={ changeInvert } label="Invertir" />
            <FilterControl filter="opacity" action={ changeOpacity } label="Opacidad" />
            <FilterControl filter="saturate" action={ changeSaturate } label="Saturación" />
            <FilterControl filter="sepia" action={ changeSepia } label="Sepia" />
            <div className="p-text-right">
                <Button label="Guardar"/>
            </div>
        </aside>
    )
}

export default FiltersSidebar
