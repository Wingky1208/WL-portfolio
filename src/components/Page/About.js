import React from 'react';
import CV from "../../assets/img/cv.png";


export default function About() {
    return (
        <div className="text-center d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto heading">
                        <h1>About me</h1>
                        <img
                            src={CV}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                        />
                        <hr />
                        <h5 className="mb-5 intro">I am an experienced front end developer with detailed full stack knowledge. I have experience in developing websites using the latest core web technologies. I recently earned a Certificate in Full Stack Web Development from the University of Toronto.</h5>

                        <h5 className="mb-5 intro">My strong organizational skills and excellent problem-solving abilities allow me to effectively collaborate on cross-functional teams. My Master Degree of Arts , Bachelor Degree of Business Administration, drive for success, and strong attention to detail are great assets that I own.</h5>

                    </div>
                </div>
            </div>
        </div>
    )
}
