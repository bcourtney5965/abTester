import React, { Component } from 'react';

class DashboardTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "it works"
    }
  }
  render() {
    return (
      <tr>
        <td>{this.props.idea.pic}</td>
        <td>{this.props.idea.name}</td>
        <td>{this.props.idea.profit}</td>
        <td>{this.props.idea.confidence}</td>
        <td>{this.props.idea.lastUpdate}</td>
      </tr>
    );
  }
}

class DashboardTable extends Component {
  constructor() {
    super();
    this.state = {
      test: "it works"
    }
  }
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
          <DashboardTableRow idea={ideas} />
        </tbody>
      </table>
    );
  }
}

var ideas = [
  {"pic": "pic", "name": "abTester", "profit": "$3,600", "confidence": "80%", "lastUpdate": "10/26/2016 10:30 PM"},
  // {"pic": "pic", "name": "Funding Match-Maker", "profit": "$5,600", "confidence": "62%", "lastUpdate": "08/23/2016 08:12 AM"},
  // {"pic": "pic", "name": "Automated Real Estate Finder", "profit": "$2,700", "confidence": "82%", "lastUpdate": "03/17/2016 03:39 PM"}
]

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      test: "this works"
    }
  }
  render() {
    return (
      <div id="dashboard">
        <div id="selectionMenu">selectionMenu</div>
        <input type="text"></input>
        <button>Create New Project</button>
        <DashboardTable ideas={ideas}/>
        <div>data = {this.state.test}</div>
      </div>
    );
  }
}


export default Dashboard;
