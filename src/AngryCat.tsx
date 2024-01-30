import React from "react";
import angryCatGif from "./angryCat.gif";

export class AngryCat extends React.Component {
    render() {
        return (
            <div>
                <img src={angryCatGif} alt="angry_cat" className={"angryCat"}/>
                <h2>The no button is just for visuals dummy</h2>
                <div>
                    <button className="button-1" role="button" onClick={() => this.handleClick(true)}>Yes</button>
                    <button className="button-1" role="button" onClick={() => this.handleClick(false)}>No</button>
                </div>
            </div>
        )
    }

    handleClick(test: Boolean) {
        console.log("test");
    }
}