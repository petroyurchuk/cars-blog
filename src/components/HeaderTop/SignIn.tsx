import { useRef, useState } from 'react'
import BackArrow from '@mui/icons-material/ArrowBackIos'
import './SignIn.scss'

type Props = {}
const SignIn = (props: Props) => {
    const blockRef = useRef<HTMLDivElement>(null)
    const signInRef = useRef<HTMLDivElement>(null)
    const refUserName = useRef<HTMLInputElement>(null)
    const refUserPassword = useRef<HTMLInputElement>(null)
    const refEmail = useRef<HTMLInputElement>(null)
    const refinfoBlock = useRef<HTMLDivElement>(null)
    const refSignInForm = useRef<HTMLFormElement>(null)
    const refForgotPasswordForm = useRef<HTMLFormElement>(null)
    const refBackArrow = useRef<HTMLDivElement>(null)

    const [warningMessage, setWarningMessage] = useState('')
    const [signIn, setSignIn] = useState('Sign in')
    const [welcome, setWelcome] = useState('Welcome! Log into your account')
    const openSignIn = () => {
        blockRef.current?.classList.add('open')
    }

    const isElement = (target: EventTarget | null): target is HTMLElement => {
        return target instanceof HTMLElement
    }

    const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
        if (
            isElement(event.target) &&
            !signInRef.current?.contains(event.target)
        ) {
            blockRef.current?.classList.remove('open')
            refinfoBlock.current?.classList.remove('open-info-block')
        }
        if (refUserName.current?.value && refUserPassword.current?.value) {
            refUserName.current.value = ''
            refUserPassword.current.value = ''
        }
    }

    const closeModalByButton = () => {
        blockRef.current?.classList.remove('open')
        refinfoBlock.current?.classList.remove('open-info-block')
        if (refUserName.current?.value && refUserPassword.current?.value) {
            refUserName.current.value = ''
            refUserPassword.current.value = ''
        }
    }

    const checkValidInputs = () => {
        if (!refUserName.current?.value || !refUserPassword.current?.value) {
            refinfoBlock.current?.classList.add('open-info-block')
            setWarningMessage('USER OR PASSWORD INCORRECT!')
        } else {
            refinfoBlock.current?.classList.remove('open-info-block')
            refUserName.current.value = ''
            refUserPassword.current.value = ''
        }
    }

    const checkValidEmail = () => {
        if (!refEmail.current?.value) {
            refinfoBlock.current?.classList.add('open-info-block')
            setWarningMessage('EMAIL INCORRECT!')
        } else {
            refinfoBlock.current?.classList.remove('open-info-block')
            refEmail.current.value = ''
        }
    }

    const forgotPassword = () => {
        setSignIn('PASSWORD RECOVERY')
        setWelcome('Recover your password')
        refinfoBlock.current?.classList.remove('open-info-block')
        refSignInForm.current?.classList.add('common-close-forms')
        refForgotPasswordForm.current?.classList.remove('common-close-forms')
        refBackArrow.current?.classList.remove('common-close-forms')
    }

    const backToSignIn = () => {
        setSignIn('Sign in')
        setWelcome('Welcome! Log into your account')
        refinfoBlock.current?.classList.remove('open-info-block')
        refSignInForm.current?.classList.remove('common-close-forms')
        refForgotPasswordForm.current?.classList.add('common-close-forms')
        refBackArrow.current?.classList.add('common-close-forms')
    }

    return (
        <div className="sign-in__container">
            <span className="sign-in-text" onClick={openSignIn}>
                Sign in / Join
            </span>
            <div onClick={closeModal} ref={blockRef} className="modal-window">
                <div ref={signInRef} className="modal-window__sign-in sign-in">
                    <div
                        ref={refBackArrow}
                        onClick={backToSignIn}
                        className="sign-in__back-arrow common-close-forms"
                        title="Back"
                    >
                        <BackArrow />
                    </div>
                    <div
                        onClick={closeModalByButton}
                        className="sign-in__close"
                        title="Close"
                    ></div>
                    <div className="sign-in__top-block">
                        <h2 className="sign-in__title">{signIn}</h2>
                        <p className="sign-in__description">{welcome}</p>
                    </div>
                    <div ref={refinfoBlock} className="sign-in__info-block">
                        {warningMessage}
                    </div>
                    <form
                        ref={refSignInForm}
                        className="sign-in__form form-sign-in"
                    >
                        <div className="sign-in__input-wrapper">
                            <input
                                ref={refUserName}
                                type="text"
                                id="sign-in__user-name"
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
                                className="sign-in__button btn"
                                value="Login"
                            />
                            <span
                                onClick={forgotPassword}
                                className="sign-in__forgot-password"
                            >
                                Forgot your password? Get help
                            </span>
                        </div>
                    </form>
                    <form
                        ref={refForgotPasswordForm}
                        className="sign-in__form-forgot-password common-close-forms"
                    >
                        <div className="sign-in__input-wrapper">
                            <input
                                type="email"
                                id="sig-in__email"
                                required
                                ref={refEmail}
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
                                className="sign-in__button btn"
                                value="send my password"
                            />
                            <span className="sign-in__info-about-email">
                                A password will be e-mailed to you.
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn
