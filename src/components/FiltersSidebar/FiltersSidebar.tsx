import React, { useState } from 'react'
import './FiltersSidebar.scss'
import { Slider } from 'primereact/slider';
import FilterControl from './FilterControl/FilterControl';
import { Button } from 'primereact/button';

const FiltersSidebar = () => {
    return (
        <aside className="p-col-2 p-p-3 tools-sidebar">
            <h3>Filtros</h3>
            <FilterControl label="Brillo" />
            <FilterControl label="Contraste" />
            <FilterControl label="Escala de grises" />
            <FilterControl label="Tono" />
            <FilterControl label="Invertir" />
            <FilterControl label="Opacidad" />
            <FilterControl label="Saturación" />
            <FilterControl label="Sepia" />
            <div className="p-text-right">
                <Button label="Guardar"/>
            </div>
        </aside>
    )
}

export default FiltersSidebar
