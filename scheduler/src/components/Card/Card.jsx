import React from 'react';

import { 
    format,
    parseISO
} from 'date-fns';  
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

import api from "../../services/Api"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons"

import "./card.css";

export default function Card(props) {
    const { addToast } = useToasts(); 
    const { task } = props;
    const { title, description, is_Done, limit_Date, _id } = task;

    const [dateDay, dateTime] = limit_Date.split("T");
    const formattedDateLimit = format(parseISO(dateDay), 'dd/MM/yyyy');

    const deleteTask = async(taskId) => {
        try {
            const token = localStorage.getItem('jwtToken');
            const bearerToken = `Bearer ${token}`;
            await api.delete(`/task/${taskId}`, { headers: { authorization: bearerToken } });
            addToast("Task deleteTask.", { appearance: 'success' })
            document.location.reload();
        } catch(error) {
            console.log(error);
            addToast("Some error occurred while trying to delete a task.", { appearance: 'error' })
        }
    }

    const markTaskAsDone = async (taskId, task) => {
        try {
            const token = localStorage.getItem('jwtToken');
            const bearerToken = `Bearer ${token}`;
            const result = await api.put(`/task/${taskId}`, {...task, is_Done: true}, { headers: { authorization: bearerToken } });
            console.log(result)
            addToast("Task marked as done.", { appearance: 'success' })
            document.location.reload();
        } catch(error) {
            console.log(error);
            addToast("Some error occurred while trying to mark task as done.", { appearance: 'error' })
        }
    }

    return (
        <div className="card-container" style={ is_Done ? {backgroundColor: "green"} : {backgroundColor: "red"} }>
            <div className="card-container-edit-delete-icons">
                {is_Done ? 
                    <Link to={{}}>
                        <FontAwesomeIcon 
                            title="Edit task"
                            style={{ cursor: "not-allowed" }}
                            className="card-container-edit-icon"
                            icon={faPenToSquare}
                        />
                    </Link>     
                    :
                    <Link to={{
                        pathname:"/updateTask",
                        state: {task: task}
                    }}>
                        <FontAwesomeIcon 
                            title="Edit task"
                            style={{ cursor: "pointer" }}
                            className="card-container-edit-icon" 
                            icon={faPenToSquare}
                        />
                    </Link>
                }
            <FontAwesomeIcon
                title="Delete task"
                className="card-container-delete-icon" 
                icon={faTrash}
                onClick={(e) => {deleteTask(_id)}}
            />
            </div>
            <div className="card-container-informations">
                <div className="card-container-information-data">
                    <div style={{fontSize: "18px", fontWeight: "500"}}>Título:</div>
                    <div style={{marginLeft: "5px"}}>{title}</div>
                </div>
                <div className="card-container-information-data">
                    <div style={{fontSize: "18px", fontWeight: "500"}}>Descrição:</div>
                    <div style={{marginLeft: "5px"}}>{description}</div>
                </div>
                <div className="card-container-information-data">
                    <div style={{fontSize: "18px", fontWeight: "500"}}>Data limite para fazer:</div>
                    <div style={{marginLeft: "5px"}}>{formattedDateLimit}</div>
                </div>
                <div className="card-container-information-data">
                    <div style={{fontSize: "18px", fontWeight: "500"}}>Está feita?</div>
                    <div style={{marginLeft: "5px"}}>{is_Done  ? "Sim" : "Não"}</div>
                </div>
            </div>
            <div className="card-container-edit-check-icon-container">
                <FontAwesomeIcon
                    title="Mark task as done"
                    className="card-container-check-icon" 
                    icon={faCheck}
                    onClick={() => {markTaskAsDone(_id, task)}}
                />
            </div>
        </div>
    )
}