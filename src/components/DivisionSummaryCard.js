import React from 'react';
import {GiLockedFortress} from 'react-icons/gi';
import {FiPhone} from 'react-icons/fi';
import {IoLocationOutline, IoJournalOutline, IoFingerPrintSharp} from 'react-icons/io5';
import {AiOutlineMail} from 'react-icons/ai';

const DivisionSummaryCard = () => {
  return (
    <div className="card summaryCard">
      <div className="card-body">
        <div className="heading">
          <div className="mr-3"><GiLockedFortress color="white" size={30} /></div>
          <div className="headingText">Division Summary</div>
        </div>
        <div>
          <div className="mb-2">
            <span className="mr-2"><FiPhone color="#A7AFD1" size={20}/></span>
            <span>0801 234 5678</span>
          </div>
          <div className="mb-2">
            <span className="mr-2"><AiOutlineMail color="#A7AFD1" size={20}/></span>
            <span>asbfefr@gmail.com</span>
          </div>
          <div className="mb-2">
            <span className="mr-2"><IoLocationOutline color="#A7AFD1" size={20} /></span>
            <span>Mojidi, Lagos</span>
          </div>
          <div className="mb-2">
            <span className="mr-2"><IoJournalOutline color="#A7AFD1" size={20} /></span>
            <span className="hyperlink">2 Journal entries</span>
          </div>
          <div className="mb-2">
            <span className="mr-2"><IoFingerPrintSharp color="#A7AFD1" size={20} /></span>
            <span>24 fingerprints enrolled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionSummaryCard;
