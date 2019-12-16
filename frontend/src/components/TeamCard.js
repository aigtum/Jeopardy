import React from "react";

class TeamCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonValue: this.props.points
        }
    }

    updatePoints(points) {
        console.log(">>> Test "+ points);
        this.setState({buttonValue: points})
    }

    render() {
        return(
            <div className={"container"}>
                <h2>Team {this.props.teamNum}</h2>
                <h3>{this.props.teamPoints}</h3>
                <div>
                    <button onChange={this.updatePoints}>Add {this.state.buttonValue}</button>
                    <button>Remove {this.state.buttonValue}</button>
                </div>
            </div>
        )
    }
}

export default TeamCard