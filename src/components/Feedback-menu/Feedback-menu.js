import PropTypes from 'prop-types';

import s from './Feedback-menu.module.css';

function FeedbackMenu({ feedbackBtnsOptions, onLeaveFeedback }) {
  return (
    <div className={s.feedbackMenu}>
      {feedbackBtnsOptions.map(opt => (
        <button
          className={s.feedbackBtn}
          key={opt}
          type="button"
          value={opt}
          onClick={onLeaveFeedback}
        >
          {opt} +1
        </button>
      ))}
    </div>
  );
}

FeedbackMenu.propTypes = {
  feedbackBtnsOptions: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackMenu;
