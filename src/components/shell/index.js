import React, { Component } from 'react';
import { db } from '../../firebase';
import withAuthorization from '../session/withAuthorization';
import { hocus } from '../../hocus';
import Log from '../log';
import Tinput from '../tinput';
import { Loader } from 'semantic-ui-react';

import '../../css/shell.css';

class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tinputs: [],
      error: null,
      limit: 5,
      loading: false,
    };
  }

  componentDidMount() {
    this.onListenForTinputs();
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
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
    db.tinputs().off();
  }

  scrollToBottom = () => {
    this.logEnd.scrollIntoView({ behavior: "smooth" });
  }

  handleSubmit = (tinput) => {
    hocus.pocus(tinput, this.props.authUser.uid);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading && <Loader active />}
        <Log tinputs={this.state.tinputs} />
        <Tinput onSubmitTinput={this.handleSubmit} />
        <div className="logend" ref={(el) => { this.logEnd = el; }}></div>
      </div>
    )
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Shell);
