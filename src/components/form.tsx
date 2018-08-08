import * as React from "react";
import './form.css';

class Form extends React.Component {
    public render() {
        return (
            <form>
                <h2>Login</h2>
                <input type={'email'} name={'email'} placeholder={'email'}/>
                <input type={'password'} name={'password'} placeholder={'password'}/>
                <div className={'button-group'}>
                    <button type={'submit'} className={'primary'}>Log In</button>
                    <button type={'button'}>Forgot Password</button>
                </div>
            </form>
        );
    }
}

export default Form;