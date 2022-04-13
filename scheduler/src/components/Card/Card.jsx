import React from 'react';

import { 
    format,
    parseISO
} from 'date-fns';  

import "./card.css";

export default function Card(props) {
    const { task } = props; 
    const { title, description, is_Done, limit_Date } = task;

    const [dateDay, dateTime] = limit_Date.split("T");
    const formattedDateLimit = format(parseISO(dateDay), 'dd/MM/yyyy');
    console.log(formattedDateLimit)

    return (
        <div className="card-container" style={ is_Done ? {backgroundColor: "green"} : {backgroundColor: "red"} }>
            <div className="card-container-informations">
                <div className="card-container-information-data">
                    <div>Título:</div>
                    <div style={{marginLeft: "5px"}}>{title}</div>
                </div>
                <div className="card-container-information-data">
                    <div>Descrição:</div>
                    <div style={{marginLeft: "5px"}}>{description}</div>
                </div>
                <div className="card-container-information-data">
                    <div>Data limite para fazer:</div>
                    <div style={{marginLeft: "5px"}}>{formattedDateLimit}</div>
                </div>
                <div className="card-container-information-data">
                    <div>Está feita?</div>
                    <div style={{marginLeft: "5px"}}>{is_Done  ? "Sim" : "Não"}</div>
                </div>
            </div>
        </div>
    )
}