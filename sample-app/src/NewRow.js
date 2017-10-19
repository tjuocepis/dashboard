import React, { Component } from 'react';

class NewRow extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    var id = this.refs.id.value
    var name = this.refs.name.value;
    var status = this.refs.status.value;
    var code = this.refs.code.value;
    var newrow = { id: id, name: name, status: status, code: code };
    this.props.onRowSubmit(newrow);

    this.refs.id.value = '';
    this.refs.name.value = '';
    this.refs.status.value = '';
    this.refs.code.value = '';

    return false;
  }

  render() {
    var inputStyle = { padding: '12px' }
    return (
      <div className="well">
        <h3>Add A Company</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group input-group-lg" style={inputStyle}>
            <input type="text" className="form-control col-md-8" placeholder="Id" ref="id" />
          </div>
          <div className="input-group input-group-lg" style={inputStyle}>
            <input type="text" className="form-control col-md-8" placeholder="Company Name" ref="name" />
          </div>
          <div className="input-group input-group-lg" style={inputStyle}>
            <input type="text" className="form-control col-md-8" placeholder="Employee Count" ref="status" />
          </div>
          <div className="input-group input-group-lg" style={inputStyle}>
            <input type="text" className="form-control col-md-8" placeholder="Headoffice" ref="code" />
          </div>
          <div className="input-group input-group-lg" style={inputStyle}>
            <input type="submit" className="btn btn-primary" value="Add Company" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewRow;