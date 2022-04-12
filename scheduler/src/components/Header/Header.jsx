import React from 'react';

import { useHistory } from 'react-router-dom';

import "./header.css";

export default function Header() {
    const history = useHistory();

    return (
        <div className="header-container">
            <div className="header-container-informations">
                <h2 className="header-logo">
                    Scheduler
                </h2>
                <div className="header-buttons">
                    <button
                        onClick={() => {
                            localStorage.removeItem('jwtToken');
                            history.push("/login");
                        }}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div >
    )
}