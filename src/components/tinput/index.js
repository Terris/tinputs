import React, { Component } from 'react';
import _ from 'lodash';
import { Responsive, Input } from 'semantic-ui-react';
import { db } from '../../firebase';

import '../../css/tinput.css'

class Tinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tinputs: {},
      tinput: "",
      error: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ error: null });
    db.createTinputRecord(this.state.tinput)
    .then((response) => {
      console.log(response);
      let updatedTinputs = { ...this.state.tinputs, [response.key]: this.state.tinput }
      this.setState({ tinputs: updatedTinputs, tinput: ""});
    })
    .catch(error => this.setState({error: error}))
  }

  render() {
    const { tinput, tinputs } = this.state;
    return (
      <div className="tinput">
        {tinputs && _.map(tinputs, (t, key) => {
          return (<p key={key}>{t}</p>)
        })}
        <form onSubmit={this.handleSubmit}>
          <Responsive maxWidth={767}>
            <Input
              autoComplete="off"
              name="tinput"
              size='small'
              fluid
              icon='terminal'
              iconPosition='left'
              placeholder='Type "help" for a list of commands'
              value={tinput}
              onChange={this.handleChange}
            />
          </Responsive>
          <Responsive minWidth={768}>
            <Input
              autoComplete="off"
              name="tinput"
              size='massive'
              fluid
              icon='terminal'
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
