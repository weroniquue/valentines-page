import React from 'react';
import './App.css';
import image from "./8535517.png";
import cat from "./cat.gif";
import angryCatGif from "./angryCat.gif";
import happyCatGit from "./happy.gif";

export enum State {
    QUESTION, DECLINED, ACCEPTED
}

export interface AppState {
    page: State;
    buttonTopPosition: string;
    buttonLeftPosition: string;
}

interface Props {
}

class App extends React.Component<Props, AppState> {

    public state: AppState = {
        page: State.QUESTION,
        buttonTopPosition: '',
        buttonLeftPosition: ''
    };

    render() {
        return (
            <div className="App" style={{backgroundImage: `url(${image})`}}>
                <div>
                    <img src={this.getCatImage()} alt="cat" className={"cat"}/>

                    <div className="purples">
                        {this.generateTextContent()}
                    </div>

                    <div style={{
                        display: this.state.page === State.ACCEPTED ? 'none' : '',
                    }}>
                        <button className="button-1" role="button" onClick={() => this.handleClick(true)}>Yes</button>
                        <button className={this.state.page === State.DECLINED ? "button-1 moved" : "button-1"}
                                style={{
                                    top: this.state.buttonTopPosition,
                                    left: this.state.buttonLeftPosition,
                                }}
                                role="button" onClick={() => this.handleClick(false)}>No</button>
                    </div>
                </div>
            </div>
        );
    }

    handleClick(agreed: boolean) {
        if (agreed) {
            this.setState({page: State.ACCEPTED});
        } else {
            this.setState({
                page: State.DECLINED,
                buttonTopPosition: this.getRandomValue(10, 80).toString() + 'vh',
                buttonLeftPosition: this.getRandomValue(10, 80).toString() + 'vw'
            });
        }
    }

    generateTextContent() {
        if (this.state.page === State.QUESTION) {
            return (
                <div>
                    <h1>Hey beautiful!</h1>
                    <h2>Filip, will you be my Valentine?</h2>
                </div>
            );
        }

        if (this.state.page === State.DECLINED) {
            return <h2>The no button is just for visuals dummy</h2>
        }

        if (this.state.page === State.ACCEPTED) {
            return <h2>Seeeee youuu baby!</h2>
        }
    }

    getCatImage() {
        if (this.state.page === State.QUESTION) {
            return cat
        }

        if (this.state.page === State.DECLINED) {
            return angryCatGif
        }

        if (this.state.page === State.ACCEPTED) {
            return happyCatGit
        }
    }

    getRandomValue(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default App;

