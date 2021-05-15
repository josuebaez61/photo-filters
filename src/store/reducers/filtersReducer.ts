import { createReducer } from "@reduxjs/toolkit";
import { 
    changeBrightness, 
    changeContrast, 
    changeGrayscale, 
    changeHueRotate, 
    changeInvert, 
    changeOpacity, 
    changeSaturate, 
    changeSepia 
} from "../actions/filtersActions";

const initialState = {
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hue_rotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
}

export const filtersReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(changeBrightness, (state, { payload }) => ({...state, brightness: payload * 2 }))
            .addCase(changeContrast, (state, { payload }) => ({...state, contrast: payload * 2 }))
            .addCase(changeGrayscale, (state, { payload }) => ({...state, grayscale: payload }))
            .addCase(changeHueRotate, (state, { payload }) => ({...state, hue_rotate: payload * 3.6 }))
            .addCase(changeInvert, (state, { payload }) => ({...state, invert: payload}))
            .addCase(changeOpacity, (state, { payload }) => ({...state, opacity: payload}))
            .addCase(changeSaturate, (state, { payload }) => ({...state, saturate: payload * 2 }))
            .addCase(changeSepia, (state, { payload }) => ({...state, sepia: payload }))
            .addDefaultCase((state) => state)
    }
)