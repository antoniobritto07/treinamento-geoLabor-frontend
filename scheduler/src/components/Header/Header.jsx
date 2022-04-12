import React from 'react';

import "./header.css";

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-container-informations">
                <h2 className="header-logo">
                    Scheduler
                </h2>
                <div className="header-buttons">
                    <button>Log Out</button>
                </div>
            </div>
        </div >
    )
}