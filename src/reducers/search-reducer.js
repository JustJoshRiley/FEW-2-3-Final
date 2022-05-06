import { LOADSEARCH } from "../actions";

const searchReducer = (state = null, action) => {
    switch(action.type) {
        case LOADSEARCH:
            return action.payload
        default:
            return state
    }
}

export default searchReducer