import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./Feedback-menu.module.css";

class FeedbackMenu extends Component {
  static propTypes = {
    options: PropTypes.object,
  };

  // нужны только ключи для будущих кнопок
  op = Object.keys(this.props.options);

  render() {
    return (
      //мапает массив создавая кнопки с
      <div className={s.feedbackMenu}>
        {this.op.map((opt) => (
          <button
            className={s.feedbackBtn}
            key={opt}
            type="button"
            value={opt}
            onClick={this.props.onLeaveFeedback}
          >
            {opt} +1
          </button>
        ))}
      </div>
    );
  }
}

// прописывать кнопки вручную ну такое
// class FeedbackMenu extends Component {
//   render() {
//     const { good, bad, neutral } = this.props;
//     return (
//       <div>
//         <button className={s.feedbackBtn} type="button">
//           Good +1
//         </button>
//         <button className={s.feedbackBtn} type="button">
//           Bad +1
//         </button>
//         <button className={s.feedbackBtn} type="button">
//           Neutral +1
//         </button>
//       </div>
//     );
//   }
// }

export default FeedbackMenu;
