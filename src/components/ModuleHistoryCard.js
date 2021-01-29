import React from 'react';
import {FaBullhorn} from 'react-icons/fa';

const ModuleHistoryCard = () => {
  return (
    <div className="card historyCard">
      <div className="card-body">
        <div className="heading">
          <div className="mr-3"><FaBullhorn color="white" size={30} /></div>
          <div className="headingText">Module History</div>
        </div>
        <div className="content pl-4 mt-4">
          <div className="lightText">Search "Journal Entries" on Division module</div>
          <div className="mt-2">22:10 15/09/2020 <div className="smallDot mx-1" /> Web</div>
        </div>
        <div className="content pl-4 mt-4">
          <div className="lightText">Search "Journal Entries" on Division module</div>
          <div className="mt-2">22:10 16/09/2020 <div className="smallDot mx-1" /> Web</div>
        </div>
        <div className="content pl-4 mt-4">
          <div className="lightText">Search "Journal Entries" on Division module</div>
          <div className="mt-2">22:10 15/09/2020 <div className="smallDot mx-1" /> Web</div>
        </div>
      </div>
    </div>
  );
};

export default ModuleHistoryCard;
