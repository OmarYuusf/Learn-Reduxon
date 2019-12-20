import AuthReducer from "./AuthReducer"
import ProjectReducer from "./ProjectReducer"
import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firebase: firebaseReducer
})
export default rootReducer