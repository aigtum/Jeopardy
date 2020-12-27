import React from "react";
import {MContext} from "./TeamProvider";

class TeamCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamNumber: this.props.teamNumber,
            teamPoints: 0,
            teamNames: ["Arild", "Olaug", "Eivind", "Hanne"]
        }

        this.addPoints = this.addPoints.bind(this);
        this.removePoints = this.removePoints.bind(this);
    }

    addPoints(points) {
        let newPoints = this.state.teamPoints + points;
        this.setState({teamPoints: newPoints})
    }

    removePoints(points) {
        let newPoints = this.state.teamPoints - points;
        this.setState({teamPoints: newPoints})
    }

    render() {
        const teamCardContainer = {
            color: "white",
            padding: "1em",
            margin: "2em",
            flex: "1",
            display: "flex",
            alignItems: "center",
            border: "2px solid gold",
            borderRadius: "10px",
            flexDirection: "column",
            marginBottom: "1em"
        };

        const btnWidth = {
            marginTop: "1em",
            width: "4em"
        }

        return(
            <div style={teamCardContainer}>
                <p className={"subtitle has-text-warning"}>{this.state.teamNames[this.state.teamNumber - 1]}</p>
                <h2 className={"subtitle has-text-warning"}>{this.state.teamPoints}</h2>

                <MContext.Consumer>
                    {context => (
                        <div className={"buttons"}>
                            <button style={btnWidth} className={"button is-primary is-medium"} onClick={() => this.addPoints(context.state.chosenQuestionPoints)}>+  {context.state.chosenQuestionPoints}</button>
                            <button style={btnWidth} className={"button is-danger is-medium"} onClick={() => this.removePoints(context.state.chosenQuestionPoints)}>- {context.state.chosenQuestionPoints}</button>
                        </div>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}

export default TeamCard;