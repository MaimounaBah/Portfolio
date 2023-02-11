import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Centre d'interêts </h3> 
                <ul>                  
                    <li className="hobby">
                        <i className="fas fa-book"></i>
                        <span> Lecture </span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-plane"></i>
                        <span>Voyage </span>  
                    </li>
                    <li className="hobby">
                        <i className="fas fa-desktop"></i>
                        <span> Codage </span>  
                    </li>
                    <li className="hobby">
                        <i className="fas fa-running"></i>
                        <span>Football </span>    
                    </li>
                </ul>
        </div>
    );
};

export default Hobbies;