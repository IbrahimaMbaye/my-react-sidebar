import React from "react";
import './index.css';
import {Link} from 'react-router-dom';

const Sidebar = () =>{
    return <main className="space-toggle">
        <header className="header space-toggle">
            <div className="header-toggle">
            <i className="fa-solid fa-bars"></i>
            </div>
            </header> 
            <aside className="sidebar show">
                <nav className="nav">
                  <div>
                  <Link to="/" className="nav-logo">
                    <i className="fas fa-home-alt nav-logo-icon"></i>
                    <span className="nav-logo-name">Homepage</span>
                  </Link>

                  <div className="nav-list">
                  <Link to="/dashboard" className="nav-link active">
                    <i className="fas fa-tachometer-alt nav-ling-icon"></i>
                    <span className="nav-link-name">dashboard</span>
                  </Link>
                  <Link to="/hotel" className="nav-link">
                    <i className="fas fa-hotel nav-link-icon"></i>
                    <span className="nav-link-name">hotel</span>
                  </Link>
                  <Link to="/transaction" className="nav-link">
                    <i className="fas fa-dollar-sign nav-link-icon"></i>
                    <span className="nav-ling-name">Transaction</span>
                  </Link>
                  </div>
                  </div>
                  <Link to="/logout" className="nav-link">
                    <i className="fas fa-sign-out nav-link-icon"></i>
                    <span className="nav-link-name">logout</span>
                  </Link>
                </nav>
                </aside>  
                <h1>Content</h1>
        </main>;
    
};

export default Sidebar;