import React, { Component } from 'react';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

class TEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { rawContent } = this.props;
    if (rawContent) {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(rawContent)))
      });
    } else {
      this.setState({ editorState: EditorState.createEmpty() });
    }
  }

  publishData = () => {
    const currentContent = this.state.editorState.getCurrentContent();
    const es = JSON.stringify(convertToRaw(currentContent));
    this.props.handlePublish(es);
  }

  onChange = (editorState) => {
    this.setState({editorState});
    this.publishData();
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    if (!this.state.editorState) {
      return (
        <p className="loading">Loading...</p>
      );
    }
    return (
      <div className="note_content">
        <Editor
          placeholder="Type your notes here"
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          spellCheck='true'
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default TEditor;
