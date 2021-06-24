import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export default class Transversale extends Component {
    state={
        languages : [
            {id: 1, value : "Esprit d'équipe" , xp: 1.6},
            {id: 2, value : "Passion", xp: 1.6},
            {id: 3, value : "Autonomie", xp: 1.6},
            {id: 4, value : "Motivation", xp:1.6},
           

        ],
        frameworks :[
            {id:1, value : "Windows - Linux" , xp:1.5},
            {id:2, value : "Git/GitHub, Vs Code, Dotnet" , xp:1.5},
            {id:3, value : "Français (Maternelle)" , xp:1.5} , 
            {id:4, value : "Anglais (B2)" , xp:1.5}    

           
        ]
    }
    render() {
        let {languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languageDisplay"
                    title="qualités"
                />
                <ProgressBar
                    languages={frameworks}
                    title="outils - systèmes & langues parlées"
                    className="frameworkDisplay"
                />
            </div>
        )
    }
}
