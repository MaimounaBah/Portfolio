import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
           <Navigation/>
           <div className="homeContent ">
                <div className="content">
                    <h1>Maïmouna BAH</h1>
                    <h2>Informaticienne MIAGISTE<marquee behavior="slide" direction="up">à la recherche d'une alternance pour la rentrée prochaine</marquee></h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank" title="Me connaître ? ">Télécharger CV</a>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Home;