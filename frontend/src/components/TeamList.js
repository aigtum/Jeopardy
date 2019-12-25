import React, {Fragment} from "react";
import TeamCard from "./TeamCard";

class TeamList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfTeams: this.props.numberOfTeams
        }
    }

    createTeamList(numOfTeams) {
        let teamList = [];

        for (let i = 0; i < numOfTeams; i++) {
            teamList[i] = {team: i+1, points: 0};
        }

        return teamList;
    }

    render() {
        const teamCardContainer = {
            display: "flex",
            flexDirection: "row",
            width: "80%",
        };

        const mainContainer = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1em"
        };

        return(
            <div>
                <div className={"level"}>
                    {this.createTeamList(this.state.numberOfTeams)
                        .map(el => (
                            <div className={"level-item"}>
                                <TeamCard key={"team"+el.team} teamNumber={el.team} />
                            </div>

                        ))}
                </div>
            </div>

        )
    }
}

export default TeamList;