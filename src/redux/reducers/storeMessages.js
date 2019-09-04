import { SET_MESSAGES } from "../types";

//

const initialState = {
    messages: []
};

const storeMessages = (state = initialState, action) => {
    switch(action.type){
        case SET_MESSAGES:
            let newState = { ...state };
            newState.messages = action.messages;
            return newState;
        default:
            return state;
    }
};

export default storeMessages;