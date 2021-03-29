const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    isOpenModal: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "HANDLECHANGE":
            return {
                ...state,
                [action.data]: action.value
            }
        case "ERROR_INPUT":
            return {
                ...state,
                passwordError: action.passwordError,
                emailError: action.emailError
            }
        default: return state
    }
}

export default reducer
