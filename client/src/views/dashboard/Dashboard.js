import React, { Component } from 'react';
import DashboardTableRow from './DashboardTableRow.js';
// import ideas from "../dashboardDummyProjects.js";


const ideas = [
  {"pic": "pic", "name": "abTester", "profit": "$3,600", "confidence": "80%", "lastUpdate": "10/26/2016 10:30 PM"},
  {"pic": "pic", "name": "Funding Match-Maker", "profit": "$5,600", "confidence": "62%", "lastUpdate": "08/23/2016 08:12 AM"},
  {"pic": "pic", "name": "Automated Real Estate Finder", "profit": "$2,700", "confidence": "82%", "lastUpdate": "03/17/2016 03:39 PM"}
]

class DashboardTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>All</th>
            <th>Project Name</th>
            <th>Profit</th>
            <th>Confidence Level</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.ideas.map((idea, index, array) => {
              return <DashboardTableRow idea={idea} key={index} />
            })
          }
        </tbody>
      </table>
    );
  }
}


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
