import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai'

const MetricCard = ({title, number}) => {
  return (
    <div className="card metricCard">
      <div className="card-body">
        <div id='numDiv'>
          <h2>{number}</h2>
          <div className="ml-1">{title}</div>
        </div>
        <div>
          <AiOutlineInfoCircle size={40} color='#B4B4BB'/>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
