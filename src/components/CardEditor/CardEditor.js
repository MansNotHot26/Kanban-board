
import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "../EditButtons/EditButtons";
import "./CardEditor.css";

class CardEditor extends Component {
  state = {
    text: this.props.text || "",
    description: this.props.description || ""
  };

  handleChangeText = event => this.setState({ text: event.target.value });
  handleChangeDesc = event => this.setState({ description: event.target.value });


  onEnter = e => {
    const { text, description } = this.state;

    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSave(text, description);
    }
  };

  render() {
    const { text, description } = this.state;
    const { onSave, onCancel, onDelete, adding } = this.props;

    return (
      <div className="Edit-Card">
        <div className="Card">
          <label className="Card-Label">Title : </label>
          <TextareaAutosize
            autoFocus
            className="Edit-Card-Textarea"
            placeholder="Enter the title for this card..."
            value={text}
            onChange={this.handleChangeText}
            spellCheck="false"
          />
          <label className="Card-Label">Description : </label>
          <TextareaAutosize
            className="Edit-Card-Textarea"
            placeholder="Enter the description for this card..."
            value={description}
            onChange={this.handleChangeDesc}
            onKeyDown={this.onEnter}
            spellCheck="false"
          />
        </div>
        <EditButtons
          handleSave={() => onSave(text, description)}
          saveLabel={adding ? "Add card" : "Save"}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
      </div>
    );
  }
}

export default CardEditor;
