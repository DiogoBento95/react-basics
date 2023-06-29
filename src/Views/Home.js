import React from "react";
import HelloWorld from '../Components/HelloWorld';

class HomeLink extends React.Component {
    render() {
        return (
        <React.Fragment>
            <h1 className='font-bold text-2xl'> This is the home page </h1>

            <HelloWorld name="Diogo"/>
        </React.Fragment>
        );
    }
}

function Home() {
    return (
        <HomeLink />
    )
}

export default Home