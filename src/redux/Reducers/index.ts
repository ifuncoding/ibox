import applicationReducer, {IApplication} from './applicationReducer'
import UserReducer, {IUser} from './userReducer'

export interface IAppStates {
    user: IUser
    application: IApplication
}

export default require('redux').combineReducers({
    user: UserReducer,
    application: applicationReducer,
})
