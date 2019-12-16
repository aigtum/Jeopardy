import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import Question from "./Question";
import TeamCard from "./TeamCard";

const TableContainer = {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    width: "100%",
    alignContent: "center"
};

const QuestionColumnContainer = {
    display: "flex",
    flexDirection: "row",
    margin: "1em"
};

function createTeamList(numOfTeams) {
    let teamList = [];
    for (let i = 0; i < numOfTeams; i++) {
        teamList.push({"team": i, "points": 0});
    }
    console.log(">>" + teamList);
    return teamList;
}

let chosenQuestionPoints = 0;
let updated = false;

function callbackForQuestionPoints(newPoints) {
    console.log("Callback: " + newPoints);
    chosenQuestionPoints = newPoints;
    updated = true;
}

function changeButtonValue() {
    if (updated === true) {
        updated = false;
        return chosenQuestionPoints;
    }
}

const Table = ({ numOfTeams, topics, questions }) =>
  !topics.length ? (
    <p>Nothing to show</p>
  ) : (
      <div style={TableContainer}>
          <h2 className="subtitle">
              Teams:
          </h2>
          <h3 onChange={changeButtonValue}>
              {createTeamList(numOfTeams).map(el =>
                    <TeamCard points={chosenQuestionPoints} teamNum={el["team"]+1} teamPoints={el["points"]}/>
                  )
              }
          </h3>

          <div style={QuestionColumnContainer}>
              {topics
                  .map(el => (
                      <div key={"topic"+el.id}>
                          <h2>{el["text"]}</h2>
                          {questions
                              .sort((a, b) => a["points"] - b["points"])
                              .map(question => (
                                  (el.id === question["topic"]) ? (
                                      <Question
                                          pointCallback={callbackForQuestionPoints}
                                          key={"question" + question["text"]}
                                          text={question["text"]}
                                          answer={question["answer"]}
                                          points={question["points"]}
                                      />
                                  ) : ("")
                              ))}
                      </div>
                  ))}
          </div>
      </div>
  );


Table.propTypes = {
    numOfTeams: PropTypes.string.isRequired,
    topics: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired
};

export default Table;