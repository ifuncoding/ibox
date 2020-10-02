import {SET_DARK_THEME, SET_LANGUAGE} from '../Constants/ActionName'
import {IAction} from './ActionInterface'

const setLanguage = (payload: any): IAction => ({
    type: SET_LANGUAGE,
    payload,
})

const setDarkTheme = (): IAction => ({
    type: SET_DARK_THEME,
    payload: null,
})

const AppActions = {
    setLanguage,
    setDarkTheme,
}

export default AppActions
