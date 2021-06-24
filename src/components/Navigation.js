import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
           <div className="id">
                <div className="idContent">
                    <img src="./media/id.jpg" alt="profil-pic" width="170" height="170"/>
                    <h3>Maïmouna BAH</h3>
                </div>
           </div>
           
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to ="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/contacts" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contacts</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/maimounabah " target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/MaimounaBah " target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MAIMOUN97428320 " target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href=" https://codepen.io/maimounabah " target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
                <div className="signature">
                       <p>FromMaïmouna - 2021</p> 
                </div>
            </div>


        </div>
    );
};

export default Navigation;