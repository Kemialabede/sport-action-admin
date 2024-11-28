import React from 'react';
import './dashboard.scss';

const AggregateCard = ({ icon, count, percentage, duration, title, style }) => {
  return (
    <div className="aggregateContainer__card">
      <img src={icon} alt="icon" />
      <p className="aggregateContainer__card__count">{count}</p>
      <h5>{title}</h5>
      {percentage && (
        <div style={style}>
          <div className="aggregateContainer__card__percentage">
            + {percentage}
          </div>
          <p className="aggregateContainer__card__duration">{duration}</p>
        </div>
      )}
    </div>
  );
};

export default AggregateCard;
