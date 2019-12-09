import React, { Component } from "react";
import PropTypes from "prop-types";
class DataProvider extends Component {
  static propTypes = {
      questions: PropTypes.string.isRequired,
      topics: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired
  };
  state = {
      topicList: [],
      questionList: [],
      loadedTopics: false,
      loadedQuestions: false,
      placeholder: "Loading..."
    };
  componentDidMount() {
    fetch(this.props.questions)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ questionList: data, loadedQuestions: true }));
    fetch(this.props.topics)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ topicList: data, loadedTopics: true }));
  }
  render() {
    const { questionList, topicList, loadedTopics, loadedQuestions, placeholder } = this.state;
    return (loadedTopics && loadedQuestions) ? this.props.render(questionList, topicList) : <p>{placeholder}</p>;
  }
}
export default DataProvider;