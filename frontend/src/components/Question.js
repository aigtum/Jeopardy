import React, {Fragment} from "react";

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
        };

        this.url = "/static/assets/JeopardyThemeSong.mp3";
        this.audio = new Audio(this.url);

        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    play(){
        console.log("clicked play");
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

    openModal() {
        if (!this.state.isClosed) {
            this.setState(state => ({isModalActive: true}));
        }
    }

    handleMouseClick(event) {
        if (!this.state.isShowing) {
            this.props.setContextPoints(this.props.points);
            this.setState(state => ({ isShowing: true}));
        }

        if (this.state.isShowing && !this.state.isAnswered) {
            this.setState(state => ({isAnswered: true}));
        }

        if (this.state.isShowing && this.state.isAnswered && !this.state.isClosed) {
            this.setState(state => ({isClosed: true, isModalActive: false}));
        }
    }

    renderSwitch(showing, answered, closed) {
        if (!showing && !closed) {
            if (this.props.write) {
                return <h2 className={"subtitle"}>{this.props.write ? `**WRITE!**${<br></br>}` : "" } {this.props.topic}: {this.props.points} poeng.</h2>    
            }
            return <h2 className={"subtitle"}>{this.props.topic}: {this.props.points} poeng.</h2>
        }
        else if (showing && !answered && !closed) {
            return <h2 className={"subtitle"}>{this.props.text}</h2>
        } else if (showing && answered && !closed) {
            return <h2 className={"subtitle"}>{this.props.answer}</h2>
        } else if (closed) {
            return <h2></h2>
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
            color: "black",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            paddingLeft: "40px",
            paddingTop: "40px"
        };

        return (
            <Fragment>
                <div className={this.state.isClosed ? "tile notification is-warning" : "tile notification is-link"} style={questionContainer} onMouseDown={this.openModal}>
                    <p className={"subtitle has-text-warning"}>{this.state.isClosed ? this.props.points : this.props.points}</p>
                    <div className={this.state.isModalActive ? modalActive : modalNotActive}>
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <div className={"modal-card-head"}>
                                <button className={"button is-large is-info"} onClick={this.state.isPlaying ? this.stop : this.play}>{this.state.isPlaying ? "Stop" : "Spill"} musikk</button>
                            </div>

                            <div className={"modal-card-body"}>
                                {this.renderSwitch(this.state.isShowing, this.state.isAnswered, this.state.isClosed)}
                            </div>
                            <div className={"modal-card-foot"}>
                                <button className={"button is-large is-primary"} onClick={this.handleMouseClick}>Neste</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Question;