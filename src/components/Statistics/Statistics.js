import PropTypes from 'prop-types';
import Notification from './Notification';
import s from './Statistics.module.css';

function Statistics(props) {
  const { good, bad, neutral, total, positivePercentage } = props;
  return (
    <div className={s.stat}>
      <h2 className={s.stat__title}>Statistics:</h2>
      {total === 0 ? (
        <Notification message={'No feedback given'} />
      ) : (
        <ul className={s.stat__list}>
          <li className={s.stat__item}>Good: {good}</li>
          <li className={s.stat__item}>Bad: {bad}</li>
          <li className={s.stat__item}>Neutral: {neutral}</li>
          <li className={s.stat__item}>Total: {total}</li>
          <li className={s.stat__item}>
            Positive percentage: {positivePercentage}%
          </li>
        </ul>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
