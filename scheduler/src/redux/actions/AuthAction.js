import api from "../../services/Api";

const AuthActionType = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILURE: "REGISTER_FAILURE"
}

const registerAuthAction = (user) => {
    return async (dispatch) => {
        try {
            const data = await api.post('/user', user);
            console.log(data);
            dispatch({type: AuthActionType.REGISTER_SUCCESS, payload: data});
        } catch (error) {
            console.error(error);
            dispatch({type: AuthActionType.REGISTER_FAILURE, payload: {} })
        }
    }
}

export { registerAuthAction, AuthActionType}