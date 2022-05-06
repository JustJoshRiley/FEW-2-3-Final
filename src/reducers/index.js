import { combineReducers } from "redux";
import searchReducer from './search-reducer'
import savePersonReducer from "./save-person-reducer";

export default combineReducers({
    search: searchReducer,
    saved: savePersonReducer
})