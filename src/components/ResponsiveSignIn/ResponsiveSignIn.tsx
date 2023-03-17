import { useState, useRef } from 'react'

import './ResponsiveSignIn.scss'

type Props = {}
const ResponsiveSignIn = (props: Props) => {
    const [titleSignIn, setTitleSignIn] = useState<string>('Sign In')
    const [firstPartTitleForm, setFirstPartTitleForm] =
        useState<string>('Welcome!')
    const [secondPartTitleForm, setSecondTitleForm] = useState<string>(
        'Log in to your account'
    )
    const [forgotPassForm, setForgotPassForm] = useState<boolean>(false)
    const forgotPassword = () => {
        setForgotPassForm(true)
        setValidInputs(false)
        setTitleSignIn('PASSWORD RECOVERY')
        setFirstPartTitleForm('')
        setSecondTitleForm('Recover your password')
        setErrorMessage('EMAIL INCORRECT!')
    }

    const refUserName = useRef<HTMLInputElement>(null)
    const refUserPassword = useRef<HTMLInputElement>(null)
    const refUserEmail = useRef<HTMLInputElement>(null)
    const [validInputs, setValidInputs] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>(
        'USER OR PASSWORD INCORRECT!'
    )
    const checkValidInputs = () => {
        !refUserName.current?.value || !refUserPassword.current?.value
            ? setValidInputs(true)
            : setValidInputs(false)
    }
    const checkValidEmail = () => {
        !refUserEmail.current?.value
            ? setValidInputs(true)
            : setValidInputs(false)
    }
    return (
        <div>
            <div className="responsive-sign-in">
                <div className="responsive-sign-in__close">
                    <h3 className="responsive-sign-in__title">{titleSignIn}</h3>
                </div>
                <div className="sign-in-panel-title">
                    <span>{firstPartTitleForm}</span>
                    {secondPartTitleForm}
                </div>

                {validInputs && (
                    <div className="responsive-sign-in__error">
                        {errorMessage}
                    </div>
                )}
                {!forgotPassForm && (
                    <form className="responsive-sign-in-form">
                        <div className="sign-in__input-wrapper">
                            <input
                                ref={refUserName}
                                type="text"
                                id="sign-in__user-name"
                                className="common-input-field"
                                required
                            />
                            <label
                                className="sign-in__input-placeholder"
                                htmlFor="sign-in__user-name"
                            >
                                Your username
                            </label>
                        </div>
                        <div className="sign-in__input-wrapper">
                            <input
                                ref={refUserPassword}
                                type="password"
                                id="sign-in__user-password"
                                className="common-input-field"
                                required
                            />
                            <label
                                className="sign-in__input-placeholder"
                                htmlFor="sign-in__user-password"
                            >
                                Your password
                            </label>
                        </div>
                        <div className="sign-in__wrapper-btn">
                            <input
                                onClick={checkValidInputs}
                                type="button"
                                className="btn responsive-sign-in-btn"
                                value="Log in"
                            />
                            <span
                                onClick={forgotPassword}
                                className="sign-in__forgot-password"
                            >
                                Forgot your password?
                            </span>
                        </div>
                    </form>
                )}
                {forgotPassForm && (
                    <form className="sign-in__form-forgot-password responsive-sign-in-form">
                        <div className="sign-in__input-wrapper">
                            <input
                                type="email"
                                id="sig-in__email"
                                className="common-input-field"
                                required
                                ref={refUserEmail}
                            />
                            <label
                                className="sign-in__input-placeholder"
                                htmlFor="sign-in__user-password"
                            >
                                Your email
                            </label>
                        </div>
                        <div className="sign-in__wrapper-btn">
                            <input
                                onClick={checkValidEmail}
                                type="button"
                                className="responsive-sign-in-btn btn"
                                value="send my password"
                            />
                            <span className="sign-in__info-about-email">
                                A password will be e-mailed to you.
                            </span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
export default ResponsiveSignIn
