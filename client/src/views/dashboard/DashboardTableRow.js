import React, { Component } from 'react';

class DashboardTableRow extends Component {
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

export default DashboardTableRow;
