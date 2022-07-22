import React, { useState } from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section className="backColor">
            <div className="container">
                <div className="row">
                    <div className="text-light col-lg-10 mx-auto">
                        <h1 className="text-center heading">Contact me</h1>
                        <hr className="light my-3" />
                        <form id="contact-form" onSubmit={handleSubmit} className="mb-5">
                            <div>
                                <label htmlFor="name" className="mt-2">Name:</label>
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mt-3">Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mt-3">Message:</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    rows="5"
                                    defaultValue={message}
                                    onBlur={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg mt-5">Submit</button>
                            </div>
                        </form>

                        <h5 className='text-center'>

                            Or simply send me an email at:  <a href="mailto:wingkyleung1208@hotmail.com"> wingkyleung1208@hotmail.com</a>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );

}