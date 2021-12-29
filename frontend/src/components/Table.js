import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import {MContext} from "./TeamProvider";

const TableContainer = {
    display: "flex",
    flex: "1",
    flexDirection: "row",
    width: "80%",
    alignContent: "center"
};

const questionColumn = {
    margin: "2px",
};

const alignText = {
    textAlign: "center",
};

const headerClear = {
    marginTop: "1em",
    minHeight: "2.5em"
}

const Table = ({ numberOfTeams, topics, questions }) =>
    !topics.length ? (
        <p>Nothing to show</p>
    ) : (
        <div>
            <div className={"tile is-ancestor"}>
                    <MContext.Consumer>
                        {context => (
                            <Fragment>
                                {topics
                                    .map(el => (
                                        <div className={"container"} style={alignText} key={"topic"+el.id}>
                                            <div className={"tile is-parent is-vertical"}>
                                                <h2 className={"subtitle has-text-warning"} style={headerClear}>{el["text"]}</h2>
                                                {questions
                                                    .sort((a, b) => a["points"] - b["points"])
                                                    .map(question => (
                                                        (el.id === question["topic"]) ? (
                                                            <Question
                                                                key={"question_" + question["text"] + "_" + question["points"]}
                                                                text={question["text"]}
                                                                answer={question["answer"]}
                                                                points={question["points"]}
                                                                topic={el["text"]}
                                                                write={question["write"]}
                                                                setContextPoints={() => context.setChosenPoints(question["points"])}
                                                            />
                                                        ) : ("")
                                                    ))}
                                            </div>

                                        </div>

                                    ))}
                            </Fragment>
                        )}
                    </MContext.Consumer>

            </div>
        </div>

    );


Table.propTypes = {
    numberOfTeams: PropTypes.string.isRequired,
    topics: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired
};

export default Table;