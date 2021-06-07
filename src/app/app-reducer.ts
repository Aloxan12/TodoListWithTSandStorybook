import {Dispatch} from 'redux'
import {authAPI} from '../api/todolists-api'
import {setIsLoggedInAC} from '../features/Login/auth-reducer'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {store} from "./store";

const initialState = {
    status: 'idle',
    error: null,
    isInitialized: false
}

const slice = createSlice({
    name: 'App',
    initialState: initialState,
    reducers: {
        setAppStatusAC:(state, action: PayloadAction<{ status: RequestStatusType }>)=>{
            state.status = action.payload.status
        },
        setAppErrorAC:(state, action: PayloadAction<{ error: any }>)=>{
            state.error = action.payload.error
        },
        setAppInitializedAC:(state, action: PayloadAction<{ value: boolean }>)=>{
            state.isInitialized = action.payload.value
        }
    }
})


export const appReducer = slice.reducer

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export const {setAppErrorAC, setAppStatusAC, setAppInitializedAC} = slice.actions

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}));
        } else {

        }

        dispatch(setAppInitializedAC({value: true}));
    })
}

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

