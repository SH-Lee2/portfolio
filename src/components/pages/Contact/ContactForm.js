import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, InputBox } from "../../styles/Contact.styled";
import useInput from "../../../hooks/use-input";
import validator from "validator";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

const ContactForm = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => validator.isEmail(value + ""));

    const {
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: messageInputHasError,
        valueChangeHandler: messageChangedHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetTextarea,
    } = useInput((value) => value.trim() !== "");

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
        formIsValid = true;
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (!enteredNameIsValid) {
            return;
        }
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log(result.text, form);
                    resetNameInput();
                    resetEmailInput();
                    resetTextarea();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    const nameClass = nameInputHasError ? "error" : "";
    const emailClass = emailInputHasError ? "error" : "";
    const messageClass = messageInputHasError ? "error" : "";

    return (
        <Form ref={form} onSubmit={sendEmail}>
            <InputBox>
                <input
                    type="text"
                    name="from_name"
                    value={enteredName}
                    className={nameClass}
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    required
                />
                <span className={nameClass}>NAME</span>
            </InputBox>
            <InputBox>
                <input
                    type="email"
                    name="from_email"
                    value={enteredEmail}
                    className={emailClass}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    required
                />

                <span className={emailClass}>EMAIL</span>
            </InputBox>
            <InputBox>
                <textarea
                    name="message"
                    value={enteredMessage}
                    className={messageClass}
                    onChange={messageChangedHandler}
                    onBlur={messageBlurHandler}
                    required
                />
                <span className={messageClass}>YOUR MESSAGE</span>
            </InputBox>

            <button type="submit" disabled={!formIsValid}>
                Send Email
            </button>
        </Form>
    );
};

export default ContactForm;
