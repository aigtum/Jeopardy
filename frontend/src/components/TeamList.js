import React, {Fragment} from "react";
import TeamCard from "./TeamCard";

class TeamList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamList: [],
            numberOfTeams: this.props.numberOfTeams
        }
    }

    createTeamList(numOfTeams) {
        let teamList = [];
        console.log(this.props.numberOfTeams);
        console.log(numOfTeams);

        for (let i = 0; i < numOfTeams; i++) {
            teamList[i] = {team: i+1, points: 0};
        }
        console.log(teamList);
        //this.setState({teamList: teamList});
        return teamList;
    }

    render() {
        const teamCardContainer = {
            display: "flex",
            flexDirection: "row"

        }

        return(
            <div style={teamCardContainer}>
                <h2>Teams:</h2>
                {this.createTeamList(this.state.numberOfTeams)
                    .map(el => (
                        <TeamCard teamNumber={el.team} />
                    ))}

            </div>

        )
    }
}

export default TeamList;