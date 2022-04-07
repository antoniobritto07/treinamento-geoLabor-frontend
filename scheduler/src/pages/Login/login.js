import React, { useState, useEffect } from 'react';
import api from '../../services/Api';
import { Link } from 'react-router-dom';

import {
    Form,
    Button
} from "react-bootstrap";

import "./login.css";

export default function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log(userData)
    }, [userData])

    const submitLogin = async (userToLogin) => {
        const { email, password } = userToLogin;
        const data = await api.post("/session", {
            email: email,
            password: password
        });


    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">
                    Scheduler
                </h2>
                <Form className="form-container">
                    <Form.Group className="form-email-container" controlId="formGroupEmail">
                        <Form.Label className="form-email-label">
                            Email address
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email..."
                            onChange={(event) => setUserData({ ...userData, email: event.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="form-password-container" controlId="formGroupPassword">
                        <Form.Label className="form-password-label">
                            Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password..."
                            onChange={(event) => setUserData({ ...userData, password: event.target.value })}
                        />
                    </Form.Group>
                    <Button
                        className="submit-button"
                        variant="primary"
                        type="submit"
                        onClick={submitLogin(userData)}
                    >
                        Submit
                    </Button>
                    <Link to="/register" className="register-user-container">
                        <a className="register-user-text">
                            Ainda não tem conta? Crie uma agora!
                        </a>
                    </Link>
                </Form>
            </div>
        </div >
    )
}