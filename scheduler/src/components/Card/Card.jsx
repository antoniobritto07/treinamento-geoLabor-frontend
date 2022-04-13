import React from 'react';

//import "./card.css";

export default function Card(props) {
    const { task } = props; 
    const { title, description, is_Done, limit_Date } = task;

    return (
        <div className="card-container">
            <div className="card-container-informations">
                <div className="card-container-information-data">
                    <div>Título:</div>
                    <div>{title}</div>
                </div>
                <div className="card-container-information-data">
                    <div>Descrição:</div>
                    <div>{description}</div>
                </div>
                <div className="card-container-information-data">
                    <div>Data limite para fazer:</div>
                    <div>{limit_Date}</div>
                </div>
                <div className="card-container-information-data">
                    <div>Está feita?</div>
                    <div>{is_Done}</div>
                </div>
            </div>
        </div>
    )
}