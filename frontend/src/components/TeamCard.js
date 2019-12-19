import React from "react";
import {MContext} from "./TeamProvider";

class TeamCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonValue: this.props.points
        }
    }

    render() {
        return(
            <MContext.Consumer>
                {context => (
                    <div className={"container"}>
                        <h2>Team {this.props.teamNum}</h2>
                        <h3>{this.props.teamPoints}</h3>
                        <div>
                            <button>Add {context.state.chosenQuestionPoints}</button>
                            <button>Remove {context.state.chosenQuestionPoints}</button>
                        </div>
                    </div>
                )}
            </MContext.Consumer>

        )
    }
}

export default TeamCard