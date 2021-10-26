import React, { Component } from "react";
import s from "./Feedback-menu.module.css";

class FeedbackMenu extends Component {
  op = Object.keys(this.props.options);

  render() {
    return (
      <div className={s.feedbackMenu}>
        {this.op.map((opt) => (
          <button
            className={s.feedbackBtn}
            key={opt}
            type="button"
            value={opt}
            onClick={this.props.onClickHandle}
          >
            {opt} +1
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackMenu;
