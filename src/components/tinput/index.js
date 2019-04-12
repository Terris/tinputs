import React, { Component } from 'react';
import { Responsive, Input } from 'semantic-ui-react';

import '../../css/tinput.css'

class Tinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tinput: "",
      error: null,
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitTinput(this.state.tinput);
    this.setState({ tinput: "" });
  }

  render() {
    const { tinput } = this.state;
    return (
      <div className="tinput">
        <form onSubmit={this.handleSubmit}>
          <Responsive maxWidth={767}>
            <Input
              autoComplete="off"
              autoFocus
              name="tinput"
              size='small'
              fluid
              icon='angle right'
              iconPosition='left'
              placeholder='Type "help" for a list of commands'
              value={tinput}
              onChange={this.handleChange}
            />
          </Responsive>
          <Responsive minWidth={768}>
            <Input
              autoComplete="off"
              autoFocus
              name="tinput"
              size='massive'
              fluid
              icon='angle right'
              iconPosition='left'
              placeholder='Type "help" for a list of commands'
              value={tinput}
              onChange={this.handleChange}
            />
          </Responsive>
        </form>
      </div>
    );
  }
}
export default Tinput;
