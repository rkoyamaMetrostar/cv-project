import React from "react";

const Resume = (props) => {
    const { resume } = props;
    return (
        <div className="resume">
            <div className="header">
                <h1>{props.resume}</h1>
                <h3>Enter your information below to get started!</h3>
            </div>
            <div className="personal">
                <h2>General Information</h2>
            </div>
            <div className="school">
                <h2>Education</h2>
            </div>
            <div className="jobs">
                <h2>Practical Experience</h2>
            </div>
        </div>
    );
};

export default Resume;