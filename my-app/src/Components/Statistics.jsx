import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="statisticsList">
    <li className="statisticsItem">
      <p className="statisticName">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1933/1933691.svg"
          alt="Аватар пользователя"
          className="icon"
        />
        Good:&nbsp;<span className="statisticValue">{good}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1933/1933511.svg"
          alt="Аватар пользователя"
          className="icon"
        />
        Neutral:&nbsp;<span className="statisticValue">{neutral}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1933/1933823.svg"
          alt="Аватар пользователя"
          className="icon"
        />
        Bad:&nbsp;<span className="statisticValue">{bad}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1006/1006394.svg"
          alt="Аватар пользователя"
          className="icon"
        />
        Total:&nbsp;<span className="statisticValue">{total}</span>
      </p>
    </li>
    <li className="statisticsItem">
      <p className="statisticName">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2694/2694943.svg"
          alt="Аватар пользователя"
          className="icon"
        />
        Positive feedback:&nbsp;
        <span className="statisticValue">{positivePercentage}%</span>
      </p>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
