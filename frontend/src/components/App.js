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
            numberOfTeams: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange(event) {
        this.setState({numberOfTeams: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({started: true});
    }


    render() {
        let isStarted = this.state.started;
        let appView;

        if(!isStarted) {
            appView =
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Number of players:
                        <input type="number" value={this.state.numberOfTeams} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
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
            <div>
                {appView}
            </div>
        )
    }

}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;