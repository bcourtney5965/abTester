import React, { Component } from 'react';
import DashboardTableRow from './DashboardTableRow.js';

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

export default DashboardTable;
