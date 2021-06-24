import React from 'react';
import Navigation from '../components/Navigation';
import Transversale from '../components/knowledges/Transversale';
import Experience from '../components/knowledges/Experience';
import Formation from '../components/knowledges/Formation';
import Hobbies from '../components/knowledges/Hobbies';


const Knowledges = () => {
    return (
        <div className="knowledges">
           <Navigation/>
            <div className="KnowledgesContent">
                <Transversale />
                <Experience />
                <Formation />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;