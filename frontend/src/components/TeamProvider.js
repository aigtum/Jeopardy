import React from "react";

export const MContext = React.createContext();

class TeamProvider extends React.Component {
    state = {
        numberOfTeams: 0,
        chosenQuestionPoints: 0,
        teamList: []
    };

    render() {
        console.log(">> Render triggered! Points: " + this.state.chosenQuestionPoints);
        return (
            <MContext.Provider value={
                {
                    state: this.state,
                    setChosenPoints: (value) => this.setState({chosenQuestionPoints: value}),
                    setTeamNum: (value) => this.setState({numberOfTeams: value})
                }
            }>
            {this.props.children}
            </MContext.Provider>
        )
    }
}

export default TeamProvider;
