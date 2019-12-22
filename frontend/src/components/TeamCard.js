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
            flexDirection: "column",
            paddingRight: "1em",
            flex: "1",
            alignItems: "center"
        };

        return(
            <div style={teamCardContainer}>
                <h2 className={"subtitle has-text-warning"}>Team {this.state.teamNumber}: {this.state.teamPoints}</h2>

                <MContext.Consumer>
                    {context => (
                        <div className={"buttons"}>
                            <button className={"button is-primary"} onClick={() => this.addPoints(context.state.chosenQuestionPoints)}>Add {context.state.chosenQuestionPoints}</button>
                            <button className={"button is-danger"} onClick={() => this.removePoints(context.state.chosenQuestionPoints)}>Remove {context.state.chosenQuestionPoints}</button>
                        </div>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}

export default TeamCard;