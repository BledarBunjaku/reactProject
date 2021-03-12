import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Style from './register.scss'
import axios from 'axios';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


// const data = () => {
//      axios.get('http://276ebd12cfd4.ngrok.io/api/register')
//         .then(response =>
//             console.log('data', response))
// }

const Register = () => {


    const data = {
        emri: '',
        password: '',

    };


    const datass = async () => {
        const response = await fetch(`http://276ebd12cfd4.ngrok.io/api/register`)
        const data = await response.json();
        // const modifyArray = data.hits.map(obj => ({ ...obj, nrAmount: 1 }))
        // setRecepies([...modifyArray])
        console.log('datassss', data)
    }

    datass();

    return (
        <div className='register-form'>
            <h1>Signup</h1>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}

                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='first-name'>
                            <p>First Name:</p>
                            <Field name="firstName" />
                            {errors.firstName && touched.firstName ? (
                                <div>{errors.firstName}</div>
                            ) : <div></div>}
                        </div>
                        <div className='last-name'>
                            <p>Last Name:</p>
                            <Field name="lastName" />
                            {errors.lastName && touched.lastName ? (
                                <div>{errors.lastName}</div>
                            ) : <div></div>}</div>
                        <div className='e-mail'>
                            <p>E-mail:</p>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register















// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


// const initialState = {
//     name: '',
//     email: '',
//     password: '',
//     passwordVerify: '',
//     errorName: '',
//     errorEmail: '',
//     errorPassword: '',
//     errorpasswordVerify: ''
// }



// const Register = () => {

//     const [inputValue, setInputValue] = useState({ ...initialState })

//     const handleChange = (event) => {
//         setInputValue({ [event.target.name]: event.target.value })
//         console.log('sasasas', inputValue)
//     }

//     const validate = () => {
//         let errorName = "";
//         let errorEmail = "";
//         let errorPassword = "";
//         let errorpasswordVerify = "";

//         if (!inputValue.name) {
//             errorName = "name cannot be blank";
//         }

//         if (!inputValue.password) {
//             errorPassword = "Password cannot be blank";
//         }
//         if (inputValue.password !== inputValue.passwordVerify) {
//             errorpasswordVerify = 'Retype the same password'
//         }

//         if (!inputValue.email.includes("@")) {
//             errorEmail = "invalid email";
//         }

//         if (errorName || errorEmail || errorPassword || errorpasswordVerify) {
//             setInputValue({ errorEmail, errorName, errorPassword, errorpasswordVerify });
//             return false;
//         }

//         return true;
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//         const isValid = validate();
//         if (isValid) {
//             console.log(inputValue);
//             // clear form
//             setInputValue(initialState);
//         }
//     };






//     return (<form className="form" role="form" autocomplete="off">
//         <div className="form-group">
//             <label for="inputName">Name</label>
//             <input
//                 onChange={handleChange}
//                 value={inputValue.name}
//                 name='name' type="text" id="inputName" placeholder="Full name" />
//             <div style={{ color: 'red', paddingLeft: '5px' }}>{inputValue.errorName}</div>


//         </div>
//         <div className="form-group">
//             <label for="inputEmail3">Email</label>
//             <input
//                 onChange={handleChange}
//                 value={inputValue.email}
//                 name='email' type="email" id="inputEmail3" placeholder="email@gmail.com" required="" />
//             <div style={{ color: 'red', paddingLeft: '5px' }}>{inputValue.errorEmail}</div>
//         </div>
//         <div className="form-group">
//             <label for="inputPassword3">Password</label>
//             <input
//                 onChange={handleChange}
//                 value={inputValue.password}
//                 name='password' type="password" id="inputPassword3" placeholder="password" title="At least 6 characters with letters and numbers" required="" />
//             <div style={{ color: 'red', paddingLeft: '5px' }}>{inputValue.errorPassword}</div>
//         </div>
//         <div className="form-group">
//             <label for="inputVerify3">Verify</label>
//             <input
//                 onChange={handleChange}
//                 value={inputValue.passwordVerify}
//                 name='passwordVerify' type="password" id="inputVerify3" placeholder="password (again)" required="" />
//             <div style={{ color: 'red', paddingLeft: '5px' }}>{inputValue.errorpasswordVerify}</div>
//         </div>
//         <div className="form-group">
//             <button onClick={handleSubmit} type="submit" className="btn btn-primary float-left">Submit</button>
//         </div>
//     </form>)



// }

// export default Register