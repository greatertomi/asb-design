import React from 'react';
import './App.scss';
import {AiOutlineCheckCircle, AiOutlineArrowRight, AiOutlineArrowUp} from 'react-icons/ai';
import {IoEllipsisVertical} from 'react-icons/io5'
import {BsArrowDownRight} from 'react-icons/bs'
import ModuleHistoryCard from './components/ModuleHistoryCard';
import Navbar from './components/Navbar';
import BreakCrumb from './components/BreakCrumb';
import DivisionSummaryCard from './components/DivisionSummaryCard';
import MetricCard from './components/MetricCard';
import {metrics, tableData} from './data';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="px-3">
        <BreakCrumb />
        <div className="d-flex justify-content-between">
          {metrics.map(({id, title, number}) =>
            <MetricCard key={id} title={title} number={number} />)}
        </div>
        <div className="row mt-3">
          <div className="col-md-3 col-sm-12">
            <div className="col-md-12 col-sm-6">
              <DivisionSummaryCard />
            </div>
            <div className="col-md-12 col-sm-6 mt-4">
              <ModuleHistoryCard />
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <table className="table">
              <thead>
              <tr className="bg-light">
                <td>
                  <input type="checkbox" />
                </td>
                <td />
                <td>NAME</td>
                <td>LOCATION</td>
                <td>STATUS</td>
                <td>ENTRIES</td>
                <td>RISK PROFILE</td>
                <td />
              </tr>
              </thead>
              <tbody>
              {
                tableData.map(data => (
                  <tr key={data.id}>
                    <td>
                      <input type="checkbox"/>
                    </td>
                    <td><AiOutlineCheckCircle color="#266CD3" size={20} /></td>
                    <td>{data.name}</td>
                    <td>
                      <div>{data.location}</div>
                      <div className="lightText">{data.address}</div>
                    </td>
                    <td>
                      {data.status === 'No Issues' ?
                        <div className="badge badge-primary">No Issues</div> :
                        <div className="badge badge-warning">2 Issues found</div>
                      }
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="blackDot mr-2"> </div>
                        <div>{data.entryNumber}</div>
                      </div>
                      <div className="lightText">{data.entryType}</div>
                    </td>
                    <td>
                      {data.riskProfile === 'Low Risk' && <BsArrowDownRight color="#3AB65C" size={20} />}
                      {data.riskProfile === 'Mid Risk' && <AiOutlineArrowRight color="#266CD3" size={20} />}
                      {data.riskProfile === 'High Risk' && <AiOutlineArrowUp className="text-danger" size={20} />}
                      {data.riskProfile === 'Low Risk' && <span className="text-success ml-2">Low Risk</span>}
                      {data.riskProfile === 'Mid Risk' && <span className="text-primary ml-2">Medium Risk</span>}
                      {data.riskProfile === 'High Risk' && <span className="text-danger ml-2">High Risk</span>}
                    </td>
                    <td>
                      <IoEllipsisVertical size={20} />
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
