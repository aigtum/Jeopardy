import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import Question from "./Question";

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
}

const Table = ({ topics, questions }) =>
  !topics.length ? (
    <p>Nothing to show</p>
  ) : (
      <div style={TableContainer}>
          <h2 className="subtitle">
              Showing <strong>{topics.length} topics</strong>
          </h2>
          <h2>
              Showing {questions.length} questions
          </h2>
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
                                          key={"question" + question["text"]}
                                          text={question["text"]}
                                          answer={question["answer"]}
                                          points={question["points"]}/>
                                  ) : ("")
                              ))}
                      </div>
                  ))}
          </div>
      </div>
  );


Table.propTypes = {
    topics: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired
};

export default Table;