import React, { useState } from 'react';
import api from '../../services/Api';
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";

import {
    Form,
    Button
} from "react-bootstrap";

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import "./register.css";
import { registerAuthAction } from '../../redux/actions/AuthAction';

function Register(props) {
    const { user, register } = props;
    const { addToast } = useToasts();
    const history = useHistory();

    const [userToCreate, setUserToCreate] = useState({
        name: "",
        email: "",
        password: ""
    })

    const submitCreateNewAccount = async(userToCreate) => {
        try {
            if(localStorage.getItem('jwtToken')) {
                addToast("You need to logout before try to register a new account", { appearance: 'error' })
                return;
            }
            const response = await api.post("/user", { ...userToCreate});
            const { token } = response.data;  
            localStorage.setItem('jwtToken', token);

            history.push("/dashboard");
        }
        catch (error) {
            addToast("Something got wrong while create a new account", { appearance: 'error' })
            console.log(error)
        }
    }

    return (
        <div className="register-container">
            <Header />
            <div className="register-box">
                <h2 className="register-title">
                    Create your account on Scheduler!
                </h2>
                <Form className="form-container">
                    <Form.Group className="form-name-container">
                        <Form.Label className="form-name-label">
                            Your name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name..."
                            onChange={(event) => setUserToCreate({ ...userToCreate, name: event.target.value })}
                        />
                    </Form.Group>
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
                        onClick={() => {
                            submitCreateNewAccount(userToCreate);
                            // register(userToCreate);
                        }}
                    >
                        Create account
                    </Button>
                </Form>
            </div>
            <Footer />
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        user: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (userState) => {
            dispatch(registerAuthAction(userState))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);