const initialSignUpState = {
    name: "",
    lastname: "",
    username: "",
    email: "",
    birthday: "",
    password: "",
    password2: "",
    nameError: "",
    usernameError: "",
    lastnameError: "",
    emailError: "",
    passwordError: "",
    passwordError2: ""
}


const registerReducer = (state = initialSignUpState, action) => {
    switch (action.type) {
        case 'HANDLECHANGE_REGISTER': return {
            ...state,
            [action.data]: action.value
        }
        case 'REGISTER': return {
            ...state,
            [action.data]: action.value
        }
        case 'ERROR_INPUT': return {
            ...state,
            nameError: action.nameError,
            usernameError: action.usernameError,
            lastnameError: action.lastnameError,
            emailError: action.emailError,
            passwordError: action.passwordError,
            passwordError2: action.passwordError2
        }
        default: return state
    }
}

export default registerReducer