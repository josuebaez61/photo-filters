import { Slider } from 'primereact/slider'
import React, { useState } from 'react'

interface FilterControlProps {
    label: string;
}

const FilterControl = ({ label }: FilterControlProps) => {
    const [value1, setValue1] = useState(0);

    return (
        <div className="p-field p-mb-5">
            <label className="p-mb-2">{ label }</label>
            <Slider value={value1} onChange={(e: any) => setValue1(e.value)} />
        </div>
    )
}

export default FilterControl
