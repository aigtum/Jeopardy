import React, {Fragment} from "react";

const pointText = {
    color: "gold",
    paddingBottom: "1em"
}

const modalActive = "modal is-active";
const modalNotActive  = "modal";

class Question extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
            isShowing: false,
            isAnswered: false,
            isClosed: false,
            isModalActive: false
        }

        this.url = "/static/assets/JeopardyThemeSong.mp3";
        this.audio = new Audio(this.url);
        this.audio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);

        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
    }

    play(){
        this.setState({
            isPlaying: true
        });
        this.audio.play();
    }

    stop() {
        this.setState({
            isPlaying: false
        });
        this.audio.pause();
    }

    handleMouseClick(event) {
        if (!this.state.isShowing) {
            this.props.setContextPoints(this.props.points);
            this.setState(state => ({ isShowing: true, isModalActive: true }));
        }
        if (this.state.isShowing && !this.state.isAnswered && !this.state.isPlaying) {
            this.play();
        }
        if (this.state.isShowing && !this.state.isAnswered && this.state.isPlaying) {
            this.setState(state => ({isAnswered: true}));
            this.stop();
        }
        if (this.state.isShowing && this.state.isAnswered && !this.state.isClosed) {
            this.setState(state => ({isClosed: true, isModalActive: false}));
        }
    }

    renderSwitch(showing, answered, closed) {
        if (showing && !answered && !closed) {
            return <p>{this.props.text}</p>
        } else if (showing && answered && !closed) {
            return <p>{this.props.answer}</p>
        } else if (closed) {
            return <p></p>
        }
    }

    render() {
        const question = {
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "1",
            border: "2px sold gold"
        };

        const questionContainer = {
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            paddingLeft: "40px",
            paddingTop: "40px"
        };

        return (
            <Fragment>
                <div className={this.state.isClosed ? "tile notification is-warning" : "tile notification is-link"} style={questionContainer} onMouseDown={this.handleMouseClick}>
                            <p className={"subtitle has-text-warning"} >{this.props.points}</p>
                            <div className={this.state.isModalActive ? modalActive : modalNotActive}>
                                <div className="modal-background"></div>
                                <div className="modal-content">
                                    <div>
                                        {this.renderSwitch(this.state.isShowing, this.state.isAnswered, this.state.isClosed)}
                                    </div>
                                    <button className={"button is-large is-info"}>Spill musikk</button>
                                </div>
                                <button className="modal-close is-large" aria-label="close"></button>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Question;