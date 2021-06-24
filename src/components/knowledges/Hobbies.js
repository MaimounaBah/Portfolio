import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Langues & Centre d'interêts </h3> 
                <ul>
                    <li className="hobby">
                        <i className="fas fa-check-square"></i>
                       <span> Français:  Langue Maternelle </span>   
                    </li>
                    <li className="hobby">
                        <i className="fas fa-check-square"></i>
                        <span>Anglais : Niveau B2  </span>   
                    </li>
                   
                    <li className="hobby">
                        <i className="fas fa-book"></i>
                        <span> Lecture : Litterature africaine   </span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-plane"></i>
                        <span>Voyage: Guinée - France  </span>  
                    </li>
                    <li className="hobby">
                        <i className="fas fa-desktop"></i>
                        <span> Codage : PHP, C#, Java </span>  
                    </li>
                    <li className="hobby">
                        <i className="fas fa-running"></i>
                        <span>Sport : Football </span>    
                    </li>
                </ul>
        </div>
    );
};

export default Hobbies;