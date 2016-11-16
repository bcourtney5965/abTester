import React, { Component } from 'react';
import { DataTable } from 'react-data-components';


class Dashboard extends Component {



  render() {
    var tableColumns = [
        { title: 'Name', prop: 'name' },
        { title: 'City', prop: 'city' },
        { title: 'Street address', prop: 'street' },
        { title: 'Phone', prop: 'phone', defaultContent: '<no phone>' }
      ];

    var data = [
      {id: 1, name: 'Bob', city: 'San Francisco', street: '333 West Wacker Drive', phone: '321-7654' },
      {id: 2, name: 'John', city: 'LA', street: '3 East 2nd Drive', phone: '321-7654' },
      {id: 3, name: 'Steve', city: 'Austin', street: '53 1st Street', phone: '321-7654' }
    ];
    return (
      <div id="dashboard">
        <h1>Dashboard</h1>
        <div id="dasboard-container">
          <div id="controls" className="dasboard-container-children">
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
          <DataTable
            className="container"
            keys="id"
            columns={tableColumns}
            initialData={data}
            initialPageLength={5}
            initialSortBy={{ prop: 'city', order: 'descending' }}
            pageLengthOptions={[ 5, 20, 50 ]}
            key={data.id}
          />
        </div>
      </div>
    );
  }
}


export default Dashboard;
