import React from 'react'
import './Home.css';
import { Dashboard } from './Dashboard';

export default props => {
    
    return (
    
        <div className="containerHome">
            <h1>Github <i>Search</i></h1>
            <Dashboard {...props} />
        </div>
        
    )
    
}