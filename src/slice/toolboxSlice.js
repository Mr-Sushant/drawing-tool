import { createSlice } from '@reduxjs/toolkit'
import { MENU, COLORS } from '@/constants'

const initialState = {
    [MENU.PENCIL]: {
        color: COLORS.BLACK,
        size: 3
    },
    [MENU.ERASER]: {
        color: "white",
        size: 3
    },
    [MENU.UNDO]: {},
    [MENU.REDO]: {},
    [MENU.DOWNLOAD]: {},
}

export const toolboxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state[action.payload.item].color = action.payload.color
        },
        changeBrushSize: (state, action) => {
            state[action.payload.item].size = action.payload.size
        }
    }
})

export const {changeColor, changeBrushSize} = toolboxSlice.actions

export default toolboxSlice.reducer