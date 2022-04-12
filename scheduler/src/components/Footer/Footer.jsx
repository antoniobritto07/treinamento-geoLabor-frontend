import React from 'react';
import { Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div>Created by Antônio Britto</div>
            <Link
                to={{ pathname: "https://github.com/antoniobritto07" }}
                target="_blank" 
                className="footer-link-container"
            >
                <a className="footer-link-label">
                    GitHub Account
                </a>
            </Link>
        </div >
    )
}