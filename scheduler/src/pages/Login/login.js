import React from 'react';

import {
    Form
} from "react-bootstrap";

import "./login.css";

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <Form className="form-container">
                    <Form.Group className="form-email-container" controlId="formGroupEmail">
                        <Form.Label className="form-email-label">
                            Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="form-password-container" controlId="formGroupPassword">
                        <Form.Label className="form-password-label">
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
        </div >
    )
}