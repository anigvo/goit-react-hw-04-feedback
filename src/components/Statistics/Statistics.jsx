import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total() ? (
        <>
          <ul className={css.list}>
            <li className={css.item}>Good: {good}</li>
            <li className={css.item}>Neutral: {neutral}</li>
            <li className={css.item}>Bad: {bad}</li>
          </ul>
          <p>Total: {total()}</p>
          <p>Positive feedback: {positivePercentage()}</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
