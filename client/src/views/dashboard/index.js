import React, { Component } from 'react';
import DashboardTable from './DashboardTable.js';
import DashboardTableRow from './DashboardTableRow.js';

const ideas = [
  {"pic": "pic", "name": "abTester", "profit": "$3,600", "confidence": "80%", "lastUpdate": "10/26/2016 10:30 PM"},
  {"pic": "pic", "name": "Funding Match-Maker", "profit": "$5,600", "confidence": "62%", "lastUpdate": "08/23/2016 08:12 AM"},
  {"pic": "pic", "name": "Automated Real Estate Finder", "profit": "$2,700", "confidence": "82%", "lastUpdate": "03/17/2016 03:39 PM"}
]

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      test: "This data is displaying dynamically"
    }
  }
  render() {
    return (
      <div id="dashboard">
        <div id="selectionMenu">selectionMenu</div>
        <input type="text" />
        <button>Create New Project</button>
        <DashboardTable ideas={ideas}/>
        <div>data = {this.state.test}</div>
      </div>
    );
  }
}

export default Dashboard;