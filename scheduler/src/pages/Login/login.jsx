import React, { useState } from 'react';
import api from '../../services/Api';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from "react-toast-notifications";

import {
    Form,
    Button
} from "react-bootstrap";

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import "./login.css";

export default function Login() {
    const { addToast } = useToasts(); 
    const history = useHistory();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const submitLogin = async (userToLogin) => {
        try {
            const response = await api.post("/session", { ...userToLogin });
            const { token } = response.data;  
            localStorage.setItem('jwtToken', token);

            history.push("/dashboard");
        }
        catch (error) {
            addToast("Something got wrong while trying to login account", { appearance: 'error' })
            console.log(error)
        }
    }

    return (
        <div className="login-container">
            <Header />
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
                        onClick={() => {submitLogin(userData)}}
                    >
                        Submit
                    </Button>
                    <Link to="/register" className="register-user-container">
                        <a className="register-user-text">
                            Don't have an account yet? Create it now!
                        </a>
                    </Link>
                </Form>
            </div>
            <Footer/>
        </div >
    )
}