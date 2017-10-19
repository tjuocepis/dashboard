import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import ApiInfo from './ApiInfo.js';
import Card from './Card/Card.js';

class ApiInfoList extends React.Component {
  handleApiInfoRemove = (apiInfo) => {
    this.props.onApiInfoRemove(apiInfo);
  }

  render() {
    const apiInfos = [];
    const self = this; // TODO: Needs to find out why that = this made it work; Was getting error that onCompanyDelete is not undefined
    this.props.clist.forEach((apiInfo) => {
      apiInfos.push(<ApiInfo key={apiInfo.id} apiInfo={apiInfo} onApiInfoDelete={self.handleApiInfoRemove} />);
    });
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Card
                title="API Health"
                category="Here is a subtitle for this table"
                contentClass="table-responsive table-full-width"
                content={
                  <div>
                    <button type="button" class="btn btn-link">Add API</button>
                    <button type="button" class="btn btn-link">Refresh All</button>
                    <Table striped hover>
                      <thead><tr><th>Health</th><th>API Name</th><th>Status</th><th>Code</th><th>Response Time</th><th>Last Updated</th><th>Action</th></tr></thead>
                      <tbody>{apiInfos}</tbody>
                    </Table>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApiInfoList;