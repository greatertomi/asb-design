import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai'

const MetricCard = () => {
  return (
    <div className="card metricCard">
      <div className="card-body">
        <div id='numDiv'>
          <h2>31454</h2>
          <div>Ongoing metric</div>
        </div>
        <div>
          <AiOutlineInfoCircle size={40} color='#B4B4BB'/>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
