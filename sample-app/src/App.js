import React, { Component } from 'react';
import logo from './logo.svg';
import ApiInfoList from './ApiInfoList.js';
import NewRow from './NewRow.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiInfoList: this.props.apiInfos }
  }

  handleNewRowSubmit = (newApiInfo) => {
    this.setState({ apiInfoList: this.state.apiInfoList.concat([newApiInfo]) });
  }

  handleApiInfoRemove = (apiInfo) => {

    var index = -1;
    var clength = this.state.apiInfoList.length;
    for (var i = 0; i < clength; i++) {
      if (this.state.apiInfoList[i].id === apiInfo.id) {
        index = i;
        break;
      }
    }
    this.state.apiInfoList.splice(index, 1);
    this.setState({ apiInfoList: this.state.apiInfoList });
  }

  render() {
    var tableStyle = { width: '100%' };
    var leftTdStyle = { width: '50%', padding: '20px', verticalAlign: 'top' };
    var rightTdStyle = { width: '50%', padding: '20px', verticalAlign: 'top' };

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-lg-3">
              <NewRow onRowSubmit={this.handleNewRowSubmit} />
            </div> */}
            <div className="col-lg-12">
              <ApiInfoList clist={this.state.apiInfoList} onApiInfoRemove={this.handleApiInfoRemove} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
