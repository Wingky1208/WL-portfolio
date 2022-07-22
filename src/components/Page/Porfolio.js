import React, { useState } from 'react';
import Project from "./Project";

export default function Porfolio() {

    const [projects] = useState([

        {
            name: 'techBlog',
            description: 'Node/MySQL/Sequalize',
            link: "http://tech-blog-128.herokuapp.com",
            repo: "https://github.com/Wingky1208/Tech-blog.git"
        },
        {
            name: 'rideCompare',
            description: 'JavaScript/API/Bootstrap',
            link: "https://rgarrettlee.github.io/Ride-Compare/",
            repo: "https://github.com/Wingky1208/ride-compare.git"
        },
        {
            name: 'workScheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://wingky1208.github.io/work-schedule/",
            repo: "https://github.com/Wingky1208/work-schedule.git"
        },
        {
            name: 'weatherForecast',
            description: 'JavaScript/API/Bootstrap',
            link: "https://wingky1208.github.io/weather-forecast/",
            repo: "https://github.com/Wingky1208/weather-forecast.git"
        },
        {
            name: 'passwordGenerator',
            description: 'HTML/CSS/JavaScript',
            link: "https://wingky1208.github.io/password-generator/",
            repo: "https://github.com/Wingky1208/password-generator.git"
        },
        {
            name: 'wordGame',
            description: 'HTML/CSS/JavaScript',
            link: "https://wingky1208.github.io/word-game/",
            repo: "https://github.com/Wingky1208/word-game.git"
        },

    ])


    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center heading">Projects</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery justify">

                    {projects.map((project, index) => (
                        <Project
                            project={project}
                            key={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    )


}
