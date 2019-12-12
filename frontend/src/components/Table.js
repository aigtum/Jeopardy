import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";


const Table = ({ topics, questions }) =>
  !topics.length ? (
    <p>Nothing to show</p>
  ) : (
      <div>
          <h2 className="subtitle">
              Showing <strong>{topics.length} topics</strong>
          </h2>
          <h2>
              Showing {questions.length} questions
          </h2>
          {topics.map(el => (
              <h3 key={"topic"+el.id}>
                  {el["text"]}
                  {questions.map(question => (
                      (el.id === question["topic"]) ? (
                      <p key={"question" + question["id"]}>{question["text"]}: {question["topic"]}</p>
                      ) : ("")
                      ))}
              </h3>
          ))}
      </div>

  );


Table.propTypes = {
    topics: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired
};

export default Table;