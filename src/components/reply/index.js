import React, { Component } from 'react';
import { db } from '../../firebase';

import { Card } from 'semantic-ui-react';
import ReadOnly from '../teditor/ReadOnly';

import 'draft-js/dist/Draft.css';
import '../../css/reply.css'

class Reply extends Component {
  state = {
    reply: null,
    error: null,
  }

  componentDidMount() {
    this.getReply();
  }

  getReply = () => {
    const command = this.props.command.split(" ").join("/");
    db.getReply(command)
      .then(snapshot => {
        this.setState({
          reply: snapshot.val(),
        })
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  render() {
    const { reply } = this.state;
    const { command } = this.props;
    return (
      <Card fluid>
        <Card.Content header={"> " + command} />
        <Card.Content
          description={reply ? <ReadOnly rawContent={reply} /> : "That doesn't do anything."}
        />
      </Card>
    )
  }
}

export default (Reply);
