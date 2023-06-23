import { FeedbackItem } from 'components/FeedbackItem/FeedbackItem';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
 
  return (
    <ul className={css.list}>
      {options.map((item, index) => (
        <FeedbackItem
          item={item}
          key={index}
          onLeaveFeedback={() => onLeaveFeedback(item)}
        />
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
