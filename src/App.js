import React from 'react';
import database from './data';
import DataList from './DataList';
import SelectList from './SelectList';
import { SORTING_STATUSES } from './helpers';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialData = database;
    this.state = {data: [...this.initialData]};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({...this.state, data: SORTING_STATUSES[e.target.value](e.target.value, [...this.initialData])});
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="header">
            <h2 className="title">Simple App</h2>
        </div>
        <div className="content">
          <SelectList sortOptions={SORTING_STATUSES} className="select" onChange={this.handleChange} />
          <DataList containerClass="listContainer" itemClass="listItem" data={data} />
        </div>
      </div>
    );
  }
}

export default App;
