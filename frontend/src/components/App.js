import React, {Component} from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import TeamList from "./TeamList";
import TeamProvider, {MContext} from "./TeamProvider";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            started: false,
            numberOfTeams: "3",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createTeamNameInput = this.createTeamNameInput.bind(this);
    };


    handleChange(event) {
        this.setState({numberOfTeams: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({started: true});
    }

    createTeamNameInput() {
        let teamList = "";
        for (let i = 0; i < this.state.numberOfTeams; i++) {
            teamList = (
                <div>
                    <label> {"Lag " + i+":"}
                        <input/>
                    </label>
                </div>
                )
        }
        return teamList;
    }

    render() {
        let isStarted = this.state.started;
        let appView;

        const mainStyle = {
            color: "white"
        };



        if(!isStarted) {
            appView =
                <div className={"container"}>
                    <form onSubmit={this.handleSubmit}>
                        <div className={"field is-grouped"}>
                            <div className={"control"}>
                                <h1 className={"title has-text-warning"}>Jeopardy!</h1>
                                <div className={"subtitle has-text-warning"}>
                                    Antall spillere:
                                </div>
                                <input type="number" className={"input"} value={this.state.numberOfTeams} onChange={this.handleChange}/>

                            </div>
                        </div>

                        <div className={"field is-grouped"}>
                            <button className={"button is-link"} type="submit">Start!</button>
                        </div>
                    </form>
                </div>
        } else {
            appView =
                <div>
                    <DataProvider questions="api/questions/"
                                  topics="api/topics/"
                                  render={(q,t) =>
                                      <TeamProvider>
                                          <TeamList numberOfTeams={this.state.numberOfTeams}/>

                                          <Table
                                              numberOfTeams={this.state.numberOfTeams}
                                              topics={t}
                                              questions={q}
                                          />
                                      </TeamProvider>
                                  }
                    />
                </div>

        }

        return (
            <div style={mainStyle}>
                {appView}
            </div>
        )
    }

}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;