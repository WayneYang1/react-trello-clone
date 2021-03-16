import "../styles/ColumnEditor.css";

import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";

class ColumnEditor extends Component {
  ref = React.createRef();
  
  onEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.saveList();
    }
  };

  handleClick = e => {
    const node = this.ref.current;

    if (node.contains(e.target)) {
      return;
    } 

    this.props.onClickOutside()
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  render() {
    const { title, handleChangeTitle, deleteList } = this.props;

    return (
      <div className="Column-Title-Edit" ref={this.ref}>
        <TextareaAutosize
          autoFocus
          className="Column-Title-Textarea"
          placeholder="Enter list title..."
          value={title}
          onChange={handleChangeTitle}
          onKeyDown={this.onEnter}
          style={{ width: deleteList ? 220 : 245 }}
        />
        {deleteList && <ion-icon name="trash" onClick={deleteList} />}
      </div>
    );
  }
}

export default ColumnEditor;