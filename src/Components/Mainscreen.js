import React, {useState, useEffect} from "react";
import "../Styles/Mainscreen.css"


function Mainscreen({startButtonClick}){
    return (
        <div className="main-background">
            <div className="main">
                <header>
                    <h1><u>Memory Card Game</u></h1>
                    <small><sub>Dog Themed</sub></small>
                </header>

                <div className="description">
                    <h6 className="description-text">The game starts with randomized dog images and you cannot click on the same 
                        dog image twice. The game gets progressively more difficult each level.</h6>
                    <h5>Test your memory!!!</h5>
                </div>
                <button onClick={startButtonClick}>Get Started</button>
            </div>
        </div>
    )
}

export default Mainscreen;