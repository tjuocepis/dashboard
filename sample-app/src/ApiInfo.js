import React, { Component } from 'react';

class ApiInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemoveApiInfo = () => {
    this.props.onApiInfoDelete(this.props.apiInfo);
    return false;
  }
  render() {
    return (
      <tr>
        <td><span class="glyphicon glyphicon-ok-sign status" ></span></td>
        <td>{this.props.apiInfo.name}</td>
        <td>{this.props.apiInfo.status}</td>
        <td>{this.props.apiInfo.code}</td>
        <td>{this.props.apiInfo.responseTime}</td>
        <td>{this.props.apiInfo.updateTime}</td>
        <td>
          <div className="content">
            <span type="span" class="glyphicon glyphicon-remove actionButton" onClick={this.handleRemoveApiInfo} />
            <span type="span" class="glyphicon glyphicon-refresh actionButton"/>
          </div>
        </td>
      </tr>
    );
  }
}

export default ApiInfo;