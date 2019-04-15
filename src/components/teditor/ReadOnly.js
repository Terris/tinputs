import React, { Component } from 'react';
import {Editor, EditorState, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

class ReadOnly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
    };
  }

  componentDidMount() {
    const { rawContent } = this.props;
    if (rawContent) {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(rawContent)))
      });
    }
  }

  render() {
    const { editorState } = this.state;
    if (editorState === null) {
      return <p>Loading...</p>
    }
    return (
      <Editor
        editorState={this.state.editorState}
        readOnly
      />
    );
  }
}

export default ReadOnly;
