import React from "react";
import {MContext} from "./TeamProvider";

class TeamCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamNumber: this.props.teamNumber,
            teamPoints: 0
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
            display: "flex",

        }

        return(
            <div style={teamCardContainer}>
                <h2>Team {this.state.teamNumber}</h2>
                <h3>{this.state.teamPoints}</h3>

                <MContext.Consumer>
                    {context => (
                        <div className={"container"}>
                            <button onClick={() => this.addPoints(context.state.chosenQuestionPoints)}>Add {context.state.chosenQuestionPoints}</button>
                            <button onClick={() => this.removePoints(context.state.chosenQuestionPoints)}>Remove {context.state.chosenQuestionPoints}</button>
                        </div>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}

export default TeamCard;