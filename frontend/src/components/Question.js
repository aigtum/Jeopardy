import React from "react";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.state = {
            isClicked: false
        }
    }

    handleMouseClick(event) {
        this.setState(state => ({ isClicked: !state.isClicked }));
    }

    render() {
        const questionContainer = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            flex: "1",
            width: "10em",
            height: "10em",
            display: "flex",
            alignItems: "center"
        };

        const question = {
            display: "flex",
            flex: "1"
        }

        return (
            <div style={questionContainer} onMouseDown={this.handleMouseClick}>
                <div>
                    <h2 style={question}>
                        <strong>{this.props.points}</strong>
                    </h2>
                    {this.state.isClicked ? <p>{this.props.answer}</p> : <p>{this.props.text}</p>}
                </div>
            </div>
            )
    }
}


export default Question;