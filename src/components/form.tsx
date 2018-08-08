import * as React from "react";
import './form.css';

class Form extends React.Component {
    public render() {
        return (
            <form>
                <h2>Login</h2>
                <input type={'email'} name={'email'} placeholder={'email'}/>
                <input type={'password'} name={'password'} placeholder={'password'}/>
                <button type={'submit'}>Log In</button>
            </form>
        );
    }
}

export default Form;