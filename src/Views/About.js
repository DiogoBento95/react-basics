import React from "react";

class AboutLink extends React.Component {
    render() {
        return (
        <React.Fragment>
            <h1 className='font-bold text-2xl mb-3'> This is the about page </h1>
            <p> This is the about page content. </p>
        </React.Fragment>
        );
    }
}

function About() {
    return (
        <AboutLink />
    )
}

export default About