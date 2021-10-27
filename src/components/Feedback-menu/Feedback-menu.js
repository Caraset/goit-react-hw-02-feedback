import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Feedback-menu.module.css';

class FeedbackMenu extends Component {
  static propTypes = {
    options: PropTypes.object,
  };

  op = Object.keys(this.props.options);

  render() {
    return (
      <div className={s.feedbackMenu}>
        {this.op.map(opt => (
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

export default FeedbackMenu;
