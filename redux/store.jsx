import { configureStore } from '@reduxjs/toolkit'
import globalStates from './reducer'

export const store = configureStore({
    reducer: {
        reducer: globalStates
    }
})
