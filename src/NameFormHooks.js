import React, { useState } from 'react';

function NameFormHooks(props) {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    let showSuccess = true;

    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    id="first-name"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleFirstNameInputChange}
                />

                <input
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleLastNameInputChange}
                />

                <input
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleEmailInputChange}
                />

            </form>
            <button className="form-field" type="submit">
                Register
            </button>

            {showSuccess && <div className='success-message'>Success! Thank you for registering</div>}
            

        </div>

    );

}


export default NameFormHooks;