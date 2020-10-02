import {IAction} from '../Actions/ActionInterface'
import {SET_USER_TOKEN} from '../Constants/ActionName'

export interface IUser {
    token: string | null
}

const initialState: IUser = {
    token: null,
}

const UserReducer = (state: IUser = initialState, action: IAction): IUser => {
    switch (action.type) {
        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload,
            }
        default:
            return state
    }
}

export default UserReducer
