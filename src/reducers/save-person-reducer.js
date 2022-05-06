import { SAVEPERSON } from "../actions";

const savePersonReducer = (state = null, action) => {
    switch(action.type) {
        case SAVEPERSON:
            return action.payload
        default:
            return state
    }
}

export default savePersonReducer