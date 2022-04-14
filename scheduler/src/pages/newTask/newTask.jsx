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

import "./newTask.css";

export default function NewTask() {
    const { addToast } = useToasts(); 
    const history = useHistory();

    const [taskData, setTasks] = useState({
        title: "",
        description: "",
        limit_Date: new Date(),
        is_Done: false
    })

    const submitNewTask = async (newTask) => {
        try {
            const token = localStorage.getItem('jwtToken');
            const bearerToken = `Bearer ${token}`;
            await api.post("/task", { ...newTask}, {headers: { authorization: bearerToken }});
            addToast("New task created successfully", { appearance: 'success' })
            history.push("/dashboard");
        }
        catch (error) {
            addToast("Something got wrong while trying to create a new task", { appearance: 'error' })
            console.log(error)
        }
    }

    return (
        <div className="new-task-container">
            <Header/>
            <div className="new-task-box">
                <h2 className="new-task-title">
                    Create a new task
                </h2>
                <Form className="new-task-form-container">
                    <Form.Group className="new-task-form-email-container">
                        <Form.Label className="new-task-form-email-label">
                            Title
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title..."
                            onChange={(event) => setTasks({ ...taskData, title: event.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="new-task-form-password-container">
                        <Form.Label className="new-task-form-password-label">
                            Description
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter description..."
                            onChange={(event) => setTasks({ ...taskData, description: event.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="new-task-form-date-container">
                        <Form.Label className="new-task-form-date-label">
                            Limit date
                        </Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Enter limit date..."
                            onChange={(event) => setTasks({ ...taskData, limit_Date: event.target.value })}
                        />
                    </Form.Group>
                    <Button
                        className="submit-button"
                        variant="primary"
                        onClick={() => {submitNewTask(taskData)}}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            <Footer/>
        </div >
    )
}