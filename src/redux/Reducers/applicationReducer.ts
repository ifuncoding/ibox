import {SET_DARK_THEME, SET_LANGUAGE} from '../Constants/ActionName'
import {IAction} from '../Actions/ActionInterface'

export interface IApplication {
    language: string | undefined
    darkTheme: boolean
}

const initialState: IApplication = {
    language: 'en-US',
    darkTheme: false,
}

const applicationReducer = (
    state: IApplication = initialState,
    action: IAction,
): IApplication => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            }
        case SET_DARK_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme,
            }
        default:
            return state
    }
}

export default applicationReducer
