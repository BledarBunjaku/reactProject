const initialLoginState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    isOpenModal: false
};


const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case "HANDLECHANGE_LOGIN": return {
                ...state,
                [action.data]: action.value
            }
        case "LOGIN": return {
            ...state,
            [action.data]: action.value
            }
        case "ERROR_INPUT": return {
                ...state,
                passwordError: action.passwordError,
                emailError: action.emailError
            }
        case "IS_OPEN_MODAL": return {
            ...state,
            isOpenModal: action.isOpenModal
        }
        default: return state
    }
}

export default loginReducer
