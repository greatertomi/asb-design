import React from 'react';
import {GiLockedFortress} from 'react-icons/gi';
import {FiPhone} from 'react-icons/fi';
import {IoLocationOutline, IoJournalOutline, IoFingerPrintSharp} from 'react-icons/io5';
import {AiOutlineMail} from 'react-icons/ai';

const DivisionSummaryCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <span><GiLockedFortress color="#A7AFD1" size={30} /></span>
          <span>Division Summary</span>
          {/*GiLockedFortress, FiPhone, IoLocationOutline, IoJournalOutline, IoFingerPrintSharp  */}
        </div>
        <div>
          <div>
            <span><FiPhone color="#A7AFD1" size={20}/></span>
            <span>0801 234 5678</span>
          </div>
          <div>
            <span><AiOutlineMail color="#A7AFD1" size={20}/></span>
            <span>asbfefr@gmail.com</span>
          </div>
          <div>
            <span><IoLocationOutline color="#A7AFD1" size={20} /></span>
            <span>Mojidi, Lagos</span>
          </div>
          <div>
            <span><IoJournalOutline color="#A7AFD1" size={20} /></span>
            <span>2 Journal entries</span>
          </div>
          <div>
            <span><IoFingerPrintSharp color="#A7AFD1" size={20} /></span>
            <span>24 fingerprints enrolled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionSummaryCard;
