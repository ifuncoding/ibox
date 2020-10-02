import {IAction} from './ActionInterface'
import {SET_USER_TOKEN} from '../Constants/ActionName'

const setUserToken = (payload: any): IAction => ({
    type: SET_USER_TOKEN,
    payload,
})

const userAction = {
    setUserToken,
}

export default userAction
