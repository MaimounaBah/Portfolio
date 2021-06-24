import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contacts = () => {
    return (
        <div className="contacts">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Toulouse</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0760085360" title="cliquer pour copier le numéro">
                                    <span 
                                        className="clickInput"
                                        onClick={() => { alert('Téléphone copié !');}}
                                    >0760085360</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="maimounab537@gmail.com" title="cliquer pour copier l'adresse mail">
                                    <span 
                                        className="clickInput"
                                        onClick={() => { alert('E-mail copié !');}}
                                    >maimounab537@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="https://www.linkedin.com/in/maimounabah " target="_blank" rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/MaimounaBah " target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://twitter.com/MAIMOUN97428320" target="_blank" rel="noopener noreferrer">
                                <h4>Twitter</h4>
                                <i className="fab fa-twitter"></i></a>
                            <a href=" https://codepen.io/maimounabah " target="_blank" rel="noopener noreferrer">
                                <h4>CodePen</h4>
                                <i className="fab fa-codepen"></i>
                            </a>  
                        </ul>
                    </div>
                
            </div>
        </div>
    );
};

export default Contacts;