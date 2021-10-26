import React, { Component } from "react";
import s from "./Feedback.module.css";
import FeedbackMenu from "./Feedback-menu";
import Statistic from "./Feedback-panel/Statistics";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = (e) => {
    const name = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: (prevState[name] += 1),
      };
    });
  };

  render() {
    return (
      <div className={s.feedbackForm}>
        <FeedbackMenu options={this.state} onClickHandle={this.onBtnClick} />
        <Statistic options={this.state} />
      </div>
    );
  }
}

export default Feedback;
