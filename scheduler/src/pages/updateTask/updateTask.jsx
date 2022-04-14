import React, { useState } from 'react';
import api from '../../services/Api';
import { useHistory, useLocation } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import {
    Form,
    Button
} from "react-bootstrap";

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import "./updateTask.css";

function UpdateTask(props) {
    const { addToast } = useToasts();   
    const history = useHistory();
    const location = useLocation();
    const { task } = location.state;

    const [taskToUpdate, setTaskToUpdate] = useState({
        title: task.title,
        description: task.description,
        limit_Date: task.limit_Date,
        is_Done: task.is_Done,
    })

    const submitUpdateTask = async (taskToUpdate) => {
        window.event.preventDefault();
        try {
            const token = localStorage.getItem('jwtToken');
            const bearerToken = `Bearer ${token}`;
            await api.put(`/task/${task._id}`, { ...taskToUpdate}, {headers: { authorization: bearerToken }});
            addToast("Task updated successfully", { appearance: 'success' })

            history.push("/dashboard");
        }
        catch (error) {
            addToast("Something got wrong while trying to update a task", { appearance: 'error' })
            console.log(error)
        }
    }

    return (
        <div className="update-task-container">
            <Header />
            <div className="update-task-box">
                <h2 className="update-task-title">
                    Update your task
                </h2>
                <Form className="form-container">
                    <Form.Group className="form-title-container">
                        <Form.Label className="form-title-label">
                            Title
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={task.title}
                            onChange={(event) => setTaskToUpdate({ ...taskToUpdate, title: event.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="form-description-container">
                        <Form.Label className="form-description-label">
                            Description
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={task.description}
                            onChange={(event) => setTaskToUpdate({ ...taskToUpdate, description: event.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="form-limit-date-container">
                        <Form.Label className="form-limit-date-label">
                            Limit date
                        </Form.Label>
                        <Form.Control
                            type="date"
                            placeholder={task.limit_Date}
                            onChange={(event) => setTaskToUpdate({ ...taskToUpdate, limit_Date: event.target.value })}
                        />
                    </Form.Group>
                    <Button
                        className="submit-button"
                        variant="primary"
                        onClick={() => {
                            submitUpdateTask(taskToUpdate);
                        }}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            <Footer />
        </div >
    )
}


export default UpdateTask;