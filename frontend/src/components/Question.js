import React, {Fragment} from "react";
import MContext from "./TeamProvider";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.state = {
            isShowing: false,
            isAnswered: false,
            isClosed: false
        }
    }

    handleMouseClick(event) {
        if (!this.state.isShowing) {
            this.props.setContextPoints(this.props.points);
            this.setState(state => ({ isShowing: true }));
        }
        if (this.state.isShowing && !this.state.isAnswered) {
            this.setState(state => ({isAnswered: true}));
        }
        if (this.state.isShowing && this.state.isAnswered && !this.state.isClosed) {
            this.setState(state => ({isClosed: true}));
        }
    }

    renderSwitch(showing, answered, closed) {
        if (!showing) {
            return ""
        } else if (showing && !answered && !closed) {
            return <p>{this.props.text}</p>
        } else if (showing && answered && !closed) {
            return <p>{this.props.answer}</p>
        } else if (closed) {
            return <p>x</p>
        }
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

                    <Fragment>
                        <div style={questionContainer} onMouseDown={this.handleMouseClick}>
                            <div>
                                <h2 style={question}>
                                    <strong>{this.props.points}</strong>
                                </h2>
                                {this.renderSwitch(this.state.isShowing, this.state.isAnswered, this.state.isClosed)}
                            </div>
                        </div>
                    </Fragment>
            )
    }
}


export default Question;