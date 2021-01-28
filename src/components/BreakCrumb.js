import React from 'react';
import {RiArrowRightSLine} from 'react-icons/ri'

const BreakCrumb = () => {
  return (
    <div className="breadcrumb my-2">
      <div>
        Divisions
      </div>
      <div>
        <RiArrowRightSLine size={25} />
      </div>
      <div>
        Module
      </div>
    </div>
  );
};

export default BreakCrumb;
