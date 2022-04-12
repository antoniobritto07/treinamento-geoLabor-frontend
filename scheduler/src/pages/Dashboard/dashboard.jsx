import React,{ useState, useEffect } from 'react';

import {
    Col,
    Row,
    Container
} from "react-bootstrap";

import api from '../../services/Api';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Dashboard() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    },[])

    const getAllTasks = async() => {
        const token = localStorage.getItem('jwtToken');
        const bearerToken = `Bearer ${token}`;
        const response = await api.get("/task", { headers: { authorization: bearerToken } });
        setTasks(response.data.tasks);
        console.log(response.data.tasks);
    }

    return (
        <div className="dashboard-container">
            <Header />
            <Container>
                    {tasks.map((task)=> {
                        <div>
                            <div>
                                <div>Título:</div>
                                <div>{task.title}</div>
                            </div>
                            <div>
                                <div>Descrição:</div>
                                <div>{task.description}</div>
                            </div>
                            <div>
                                <div>Data limite para fazer:</div>
                                <div>{task.limit_Date}</div>
                            </div>
                            <div>
                                <div>Está feita?</div>
                                <div>{task.is_Done}</div>
                            </div>
                        </div>
                    })}
            </Container>
            <Footer/>
        </div >
    )
}
