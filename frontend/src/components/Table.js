import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import {MContext} from "./TeamProvider";

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
    margin: "1em",
    alignSelf: "center"
};

const questionColumn = {
    margin: "2px",
}

const Table = ({ numberOfTeams, topics, questions }) =>
    !topics.length ? (
        <p>Nothing to show</p>
    ) : (
        <div style={TableContainer}>
            <MContext.Consumer>
                {context => (
                    <Fragment>
                        <div style={QuestionColumnContainer}>
                            {topics
                                .map(el => (
                                    <div style={questionColumn} key={"topic"+el.id}>
                                        <h2 className={"subtitle has-text-warning"}>{el["text"]}</h2>
                                        {questions
                                            .sort((a, b) => a["points"] - b["points"])
                                            .map(question => (
                                                (el.id === question["topic"]) ? (
                                                    <Question
                                                        key={"question_" + question["text"]}
                                                        text={question["text"]}
                                                        answer={question["answer"]}
                                                        points={question["points"]}
                                                        setContextPoints={() => context.setChosenPoints(question["points"])}
                                                    />
                                                ) : ("")
                                            ))}
                                    </div>
                                ))}
                        </div>
                    </Fragment>
                )}
            </MContext.Consumer>

        </div>
    );


Table.propTypes = {
    numberOfTeams: PropTypes.string.isRequired,
    topics: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired
};

export default Table;