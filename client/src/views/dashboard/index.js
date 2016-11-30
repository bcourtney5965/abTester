import React, { Component } from 'react';
import {Link} from 'react-router';
// import DashboardTable from './DashboardTable.js';
import All from './All.js';
import Mature from './Mature.js';
import Premature from './Premature.js';

// const ideas = [
//   {"pic": "pic", "name": "abTester", "profit": "$3,600", "confidence": "80%", "lastUpdate": "10/26/2016 10:30 PM"},
//   {"pic": "pic", "name": "Funding Match-Maker", "profit": "$5,600", "confidence": "62%", "lastUpdate": "08/23/2016 08:12 AM"},
//   {"pic": "pic", "name": "Automated Real Estate Finder", "profit": "$2,700", "confidence": "82%", "lastUpdate": "03/17/2016 03:39 PM"}
// ]

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      test: "This data is displaying dynamically"
    }
  }

  showAll() {
    console.log('showAll');
  }

  render() {
    return (
      <div id="dashboard">
        <button onClick={this.showAll}>Show All Projects</button>
        <div id="selectionMenu">selectionMenu</div>
        <input type="text" />
        <button><Link to="/dashboard/all">All</Link></button>
        <button><Link to="/dashboard/mature">Mature</Link></button>
        <button><Link to="/dashboard/premature">Premature</Link></button>
        {this.props.children}
        { /*<DashboardTable ideas={ideas}/> */ }
        <div>data = {this.state.test}</div>
        <All />
        <Mature />
        <Premature />
      </div>
    );
  }
}

export default Dashboard;
