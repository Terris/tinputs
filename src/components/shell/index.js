import React, { Component } from 'react';
import { db } from '../../firebase';
import withAuthorization from '../session/withAuthorization';

import Log from '../log';
import Tinput from '../tinput';

class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tinputs: [],
      error: null,
      limit: 10,
      loading: false
    };
  }

  componentDidMount() {
    this.onListenForTinputs();
  }

  onListenForTinputs = () => {
    this.setState({ loading: true });
    db.tinputs()
      .orderByChild('user_id')
      .equalTo(this.props.authUser.uid)
      .limitToLast(this.state.limit)
      .on('value', snapshot => this.setState({ tinputs: snapshot.val(), loading: false }));
  };

  componentWillUnmount() {
    db.messages().off();
  }

  handleSubmit = (tinput) => {
    db.tinputs().push({
      command: tinput,
      user_id: this.props.authUser.uid
    });
  }

  render() {
    return (
      <div>
        <Log tinputs={this.state.tinputs} />
        <Tinput onSubmitTinput={this.handleSubmit} />
      </div>
    )
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Shell);
