import React from 'react';
import './App.scss';
import {AiOutlineCheckCircle, AiOutlineArrowRight} from 'react-icons/ai';
import {IoEllipsisVertical} from 'react-icons/io5'
import {BsArrowDownRight} from 'react-icons/bs'
import ModuleHistoryCard from './components/ModuleHistoryCard';
import Navbar from './components/Navbar';
import BreakCrumb from './components/BreakCrumb';
/*import DivisionSummaryCard from './components/DivisionSummaryCard';
import MetricCard from './components/MetricCard';*/


const App = () => {
  return (
    <div className="App">
      {/*<MetricCard />*/}
      {/*<DivisionSummaryCard />*/}
      {/*AiOutlineCheckCircle, AiOutlineArrowRight, AiOutlineArrowUp, BsArrowDownRight */}
      <Navbar />
      <BreakCrumb />
      <table className="table">
        <tr className="bg-light">
          <td>
            <input type="checkbox" />
          </td>
          <td>
          </td>
          <td>NAME</td>
          <td>LOCATION</td>
          <td>STATUS</td>
          <td>ENTRIES</td>
          <td>RISK PROFILE</td>
          <td> </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td><AiOutlineCheckCircle color="#266CD3" size={20} /></td>
          <td>Brider Fisher</td>
          <td>
            <div>Lagos state</div>
            <div className="lightText">75 Green Street</div>
          </td>
          <td>
            <div className="badge badge-warning">2 Issues found</div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <div className="blackDot mr-2"> </div>
              <div>19 Unique Entries</div>
            </div>
            <div className="lightText">Homogenous</div>
          </td>
          <td>
            <AiOutlineArrowRight color="#266CD3" size={20} />
            <span className="text-primary ml-2">Medium Risk</span>
          </td>
          <td>
            <IoEllipsisVertical size={20} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td><AiOutlineCheckCircle color="#266CD3" size={20} /></td>
          <td>Brider Fisher</td>
          <td>
            <div>Lagos state</div>
            <div className="lightText">75 Green Street</div>
          </td>
          <td>
            <div className="badge badge-primary">No Issues</div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <div className="blackDot mr-2"> </div>
              <div>19 Unique Entries</div>
            </div>
            <div className="lightText">Homogenous</div>
          </td>
          <td>
            <BsArrowDownRight color="#3AB65C" size={20} />
            <span className="text-success ml-2">Low Risk</span>
          </td>
          <td>
            <IoEllipsisVertical size={20} />
          </td>
        </tr>
      </table>
      <ModuleHistoryCard />
    </div>
  );
}

export default App;
