import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <h1>Dashboard</h1>
        <div id="dasboard-container">
          dasboard-container
          <div id="controls" class="dasboard-container-children">
            <fieldset>
                <label className="selected">
                  Working
                  <input name="state" type="radio" value="working" checked />
                </label>

                <label>
                  Standby
                  <input name="state" type="radio" value="standby" />
                </label>

                <label className="warning">
                  Off
                  <input name="state" type="radio" value="off" />
                </label>

            </fieldset>
            <div>
            <button type="button" className="btn btn-success">+</button>
            </div>
          </div>
          <div id="table" class="dasboard-container-children">
            <table>
              <tr>
                <th>Price</th>
                <th>Visits</th>
                <th>Conversions</th>
                <th>Profit</th>
              </tr>
              <tr>
                <td>$1.25</td>
                <td>1000</td>
                <td>60</td>
                <td>73.20</td>
              </tr>
              <tr>
                <td>$0.90</td>
                <td>1000</td>
                <td>10</td>
                <td>$87.00</td>
              </tr>
              <tr>
                <td>$1.25</td>
                <td>1000</td>
                <td>140</td>
                <td>$65.80</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard;
