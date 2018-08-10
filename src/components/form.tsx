import * as React from "react";
import './form.css';
import {Theme} from "./theme";

class Form extends React.Component {
    public render() {
        return (
            <form>
                <h2>Login</h2>
                <input type={'email'} name={'email'} placeholder={'email'}/>
                <input type={'password'} name={'password'} placeholder={'password'}/>
                    <Theme>
                        {style => (
                            <div className={'button-group'}>
                                <button type={'submit'} style={style.primary} className={'primary'}>
                                    Log In
                                </button>
                                <button type={'button'} style={style.secondary}>
                                    Forgot Password
                                </button>
                            </div>
                        )}
                    </Theme>
            </form>
        );
    }
}

export default Form;