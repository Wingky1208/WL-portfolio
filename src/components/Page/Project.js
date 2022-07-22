import React from 'react';
import { AiFillGithub } from "react-icons/ai";

export default function Project({ project }) {
    const { name, repo, link, description } = project;
    return (
        <div className="col-lg-3 col-sm-3 box">
            <div className="portfolio-box" key={name}>
                <img
                    src={require(`../../assets/img/${name}.png`)}
                    alt={name}
                    className="img-fluid project"
                />
                <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                        <a href={repo} className="project-category text-faded" target="_blank">
                            <AiFillGithub />
                        </a>
                        <br />
                        <a href={link} className="project-category text-faded" target="_blank">{name}</a>

                        <p className="project-name">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
