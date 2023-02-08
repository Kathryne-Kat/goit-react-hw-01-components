import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: generateColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
