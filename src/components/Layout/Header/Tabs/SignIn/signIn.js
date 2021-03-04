import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const signIn = () => {


    return (<form className="was-validated">
        <div className="form-group">
            <label for="uname">Username:</label>
            <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group form-check">
            <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" required /> I agree on blabla.
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Check this checkbox to continue.</div>
            </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>)
}

export default signIn