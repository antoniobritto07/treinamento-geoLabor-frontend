import { AuthActionType } from "../actions/AuthAction";

const authState = {
    isLoggedIn: false,
    user: {
        name: "",
        expires_at: "",
        jwttoken: "",
        authorities: []
    }
}

const authreducer = (state = authState, action) => {

    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            return {
                isLoggedIn: true,
                user: action.payload
            }
        case AuthActionType.REGISTER_FAILURE:
            return state;
        default:
            return state
    }

    return state;
}

export default authreducer;