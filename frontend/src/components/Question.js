import React, {Fragment} from "react";
import MContext from "./TeamProvider";

const questionContainer = {
    color: "white",
    backgroundColor: "darkblue",
    padding: "10px",
    flex: "1",
    width: "11em",
    height: "11em",
    display: "flex",
    alignItems: "center",
    border: "2px solid gold",
    borderRadius: "10px",
    flexDirection: "column",
    marginBottom: "4px"
};

const question = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
    border: "2px sold gold"
};

const questionDone = {
    color: "white",
    backgroundColor: "slategrey",
    padding: "10px",
    flex: "1",
    width: "11em",
    height: "11em",
    display: "flex",
    alignItems: "center",
    border: "2px solid gold",
    borderRadius: "10px",
    flexDirection: "column",
    marginBottom: "2px"
};

const pointText = {
    color: "gold",
    paddingBottom: "1em"
}

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
            return <p></p>
        }
    }

    render() {
        return (
            <Fragment>
                <div style={this.state.isClosed ? questionDone : questionContainer} onMouseDown={this.handleMouseClick}>
                    <div style={question}>
                        <h1 style={pointText} className={"subtitle has-color-gold"}>{this.props.points}</h1>
                        <p>{this.renderSwitch(this.state.isShowing, this.state.isAnswered, this.state.isClosed)}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Question;