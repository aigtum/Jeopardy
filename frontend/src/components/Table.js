import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

const buttonList = [];

for (let i = 0; i <= 5; i++) {
    let buttonRow = [];
    for (let j = 0; j <= 5; j++) {
        buttonRow.push(<td><button className={"card"} id={"t"+j+"-q"+(i+1)*200}>{(i+1)*200}</button></td>)
    }
    buttonList.push(<tr>{buttonRow}</tr>)
}

const Table = ({ topics, questions }) =>
  !topics.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="row">
      <h2 className="subtitle">
        Showing <strong>{topics.length} items</strong>
      </h2>

        <table className="table is-striped">
        <thead>

                {topics.map(el => (
            <th key={"topic"+el.id}>
              {el["text"]}
            </th>
          ))}



        </thead>
        <tbody>
        {buttonList.map(el => {
            questions.map(q => {
                let matchString = "t"+q["topic"]+"p"+q["points"];
                console.log(matchString + "; " + el)
                if (el.id == matchString) {
                    return el
                }

            })
        })}

        </tbody>
      </table>
    </div>
  );

Table.propTypes = {
    topics: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired
};

export default Table;