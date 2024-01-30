import React from 'react';
import './App.css';
import image from "./8535517.png";
import cat from "./cat.gif";
import {Button} from "./Button";
import {AngryCat} from "./AngryCat";

class App extends React.Component {
    render() {
        return (
            <div className="App" style={{backgroundImage: `url(${image})`}}>
                <div>
                    <div>
                        <img src={cat} alt="cat" className={"cat"}/>
                        <h2>Hey beautiful!</h2>
                        <h3>Filip, will you be my Valentine?</h3>
                    </div>
                    <div>
                        <button className="button-1" role="button" onClick={() => this.handleClick(true)}>Yes</button>
                        <button className="button-1" role="button" onClick={() => this.handleClick(false)}>No</button>
                        <Button>Test</Button>
                    </div>
                </div>
                <AngryCat></AngryCat>
            </div>
        );
    }

    handleClick(agreed: Boolean) {
        if (agreed) {
            console.log("yes")
        } else {
            console.log("no")
        }
    }
}

export default App;
