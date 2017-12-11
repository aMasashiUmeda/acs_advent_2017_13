import React, { Component } from 'react';
import Select from 'react-select';
import _ from 'lodash';
import axios from 'axios';
import 'react-select/dist/react-select.css';

import Styles from './App.css';

function getUsers (input) {
  if (!input) {
    return Promise.resolve({ options: [] });
  }

  return axios.get(`https://api.github.com/search/users?q=${input}`)
  .then((response) => {
    return { options: _.get(response, 'data.items', []) };
  });
}

class App extends Component {
  state = {
    selectedOption: null,
  }

  onChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  onChangeUser = (value) => {
    this.setState({ value });
  }

  render() {
    const options = [
      { value: 'nfb', label: 'NetFront Browser' },
      { value: 'nfnx', label: 'NetFront NX' },
      { value: 'nfbe', label: 'NetFront BE' },
    ];
    return (
      <div className={Styles.app}>
        <div className={Styles.box}>
          Standard
          <Select
            name="form-field-name"
            className={Styles.list}
            value={_.get(this.state, 'selectedOption.value', '')}
            onChange={this.onChange}
            options={options}
          />
        </div>
        <hr />
        <div className={Styles.box}>
          Server Request
          <Select.Async
            value={this.state.value}
            onChange={this.onChangeUser}
            valueKey="id"
            labelKey="login"
            loadOptions={getUsers}
          />
        </div>
      </div>
    );
  }
}

export default App;
