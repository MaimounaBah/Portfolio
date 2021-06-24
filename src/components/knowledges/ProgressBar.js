import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className= {props.className}>
            <h3>{props.title}</h3>
            {/* <div className= "years">
                <span>Années d'expériences</span>
                <span> 1 ans</span>
                <span> 2 ans</span>
            </div> */}
            <div>
                {
                    props.languages.map((item)=>{
                        let xpYears = 2;
                        let progressBarr = item.xp / xpYears * 100 + '%';
                        
                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width:progressBarr}}></div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;