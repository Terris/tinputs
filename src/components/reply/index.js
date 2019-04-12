import React, { Component } from 'react';
import { db } from '../../firebase';
import { Card } from 'semantic-ui-react';

class Reply extends Component {
  state = {
    reply: null,
    error: null,
  }

  componentDidMount() {
    this.getReply();
  }

  getReply = () => {
    db.getReply(this.props.command)
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
        <Card.Content header={command} />
        <Card.Content
          description={reply}
        />
      </Card>
    )
  }
}

export default (Reply);
