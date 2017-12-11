import React, { Component } from 'react';
import Select from 'react-select';
import _ from 'lodash';
import 'react-select/dist/react-select.css';

import Styles from './App.css';

class App extends Component {
  state = {
    selectedOption: null,
  }

  onChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const options = [
      { value: 'nfb', label: 'NetFront Browser' },
      { value: 'nfnx', label: 'NetFront NX' },
      { value: 'nfbe', label: 'NetFront BE' },
    ];
    return (
      <div className={Styles.app}>
        <Select
          name="form-field-name"
          value={_.get(this.state, 'selectedOption.value', '')}
          onChange={this.onChange}
          options={options}
        />
      </div>
    );
  }
}

export default App;
