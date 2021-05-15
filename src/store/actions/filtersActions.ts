import { createAction } from "@reduxjs/toolkit"
import { FiltersActions } from "../types"

export const changeBrightness = createAction(
    FiltersActions.changeBrightness,
    (value: number) => ({ payload: value })
)
export const changeContrast = createAction(
    FiltersActions.changeContrast,
    (value: number) => ({ payload: value})
)
export const changeGrayscale = createAction(
    FiltersActions.changeGrayscale,
    (value: number) => ({ payload: value })
)
export const changeHueRotate = createAction(
    FiltersActions.changeHueRotate,
    (value: number) => ({ payload: value })
)
export const changeInvert = createAction(
    FiltersActions.changeInvert,
    (value: number) => ({ payload: value })
)
export const changeOpacity = createAction(
    FiltersActions.changeOpacity,
    (value: number) => ({ payload: value })
)
export const changeSaturate = createAction(
    FiltersActions.changeSaturate,
    (value: number) => ({ payload: value })
)
export const changeSepia = createAction(
    FiltersActions.changeSepia,
    (value: number) => ({ payload: value })
)

