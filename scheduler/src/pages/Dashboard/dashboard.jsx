import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import api from '../../services/Api';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';

import "./dashboard.css"

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    },[])

    const getAllTasks = async() => {
        const token = localStorage.getItem('jwtToken');
        const bearerToken = `Bearer ${token}`;
        const response = await api.get("/task", { headers: { authorization: bearerToken } });
        setTasks(
            response.data.tasks.
            reverse()
        );
    }

    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-content-container">
            <Link to="/newTask">
                <div className="dashboard-content-container-new-task">
                    <FontAwesomeIcon 
                        className="dashboard-content-contaienr-new-task-icon" 
                        icon={faPlus}
                    />
                </div>
            </Link>
                {tasks.map((task)=> {
                    return (
                        <Card key={task._id} task={task}/>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}
