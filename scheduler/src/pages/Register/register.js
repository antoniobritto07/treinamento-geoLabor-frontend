import React, { useState } from 'react';
import api from '../../services/Api';

import {
    Form,
    Button
} from "react-bootstrap";

import "./register.css";

export default function Register() {

    const [userToCreate, setUserToCreate] = useState({
        email: "",
        password: ""
    })

    const submitCreateNewAccount = async(userToCreate) => {
        const { email, password } = userToCreate;
        const data = await api.post("/user", {
            email: email,
            password: password
        });
    }

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">
                    Create your account on Scheduler!
                </h2>
                <Form className="form-container">
                    <Form.Group className="form-email-container" controlId="formGroupEmail">
                        <Form.Label className="form-email-label">
                            Email address
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email..."
                            onChange={(event) => setUserToCreate({ ...userToCreate, email: event.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="form-password-container" controlId="formGroupPassword">
                        <Form.Label className="form-password-label">
                            Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Create password..."
                            onChange={(event) => setUserToCreate({ ...userToCreate, password: event.target.value })}
                        />
                    </Form.Group>
                    <Button
                        className="submit-button"
                        variant="primary"
                        type="submit"
                        onClick={submitCreateNewAccount(userToCreate)}
                    >
                        Create account
                    </Button>
                </Form>
            </div>
        </div >
    )
}