import { Slider, SliderChangeParams, SliderValueType } from 'primereact/slider'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

type Filter  = 'brightness' | 'contrast' | 'grayscale' | 'hue_rotate' | 'invert' | 'opacity' | 'saturate'| 'sepia';

interface FilterControlProps {
    label: string;
    action: Function;
    filter: Filter
}

const FilterControl = ({ label, action, filter }: FilterControlProps) => {

    const { brightness, contrast, grayscale, hue_rotate, invert, opacity, saturate, sepia } = useSelector((state:RootState) => state.filters)
    const [value, setValue] = useState<SliderValueType>(0);
    const dispatch = useDispatch();

    useEffect(() => {
        switch (filter) {
            case 'brightness':
                setValue(brightness/2)
                break;
            case 'contrast':
                setValue(contrast/2)
                break;
            case 'grayscale':
                setValue(grayscale)
                break;
            case 'hue_rotate':
                setValue(hue_rotate)
                break;
            case 'invert':
                setValue(invert)
                break;
            case 'opacity':
                setValue(opacity)
                break;
            case 'saturate':
                setValue(saturate/2)
                break;
            case 'sepia':
                setValue(sepia)
                break;
            default:
                setValue(0)
                break;
        }
    }, [])

    const onSlide = (e: SliderChangeParams) => {
        setValue(e.value)
        dispatch(action(e.value))
    }

    return (
        <div className="p-field p-mb-5">
            <label className="p-mb-2">{ label }</label>
            <Slider orientation="horizontal" value={ value } onChange={ e => onSlide(e) } />
        </div>
    )
}

export default FilterControl
