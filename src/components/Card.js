import "../styles/Card.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import CardEditor from "./CardEditor";

class Card extends Component {
  state = {
    hover: false,
    editing: false
  };

  hoverStart = () => this.setState({ hover: true });
  hoverEnd = () => this.setState({ hover: false });

  editStart = () =>
    this.setState({
      hover: false,
      editing: true,
      text: this.props.card.text
    });

  editEnd = () => this.setState({ hover: false, editing: false });

  editCard = async text => {
    const { card, dispatch } = this.props;

    this.editEnd();

    dispatch({
      type: "CHANGE_CARD_TEXT",
      payload: { cardId: card._id, cardText: text }
    });
  };

  deleteCard = async () => {
    const { listId, card, dispatch } = this.props;

    if (window.confirm("Do you really want to delete this card?")) {
      dispatch({
        type: "DELETE_CARD",
        payload: { cardId: card._id, listId }
      });
    }
  };

  render() {
    const { card, index } = this.props;
    const { hover, editing } = this.state;

    if (!editing) {
      return (
        <Draggable draggableId={card._id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="Card"
              onMouseEnter={this.hoverStart}
              onMouseLeave={this.hoverEnd}
            >
              {hover && (
                <div className="Card-Icons">
                  <div className="Card-Icon" onClick={this.editStart}>
                    <ion-icon name="create" />
                  </div>
                </div>
              )}

              {card.text}
            </div>
          )}
        </Draggable>
      );
    } else {
      return (
        <CardEditor
          text={card.text}
          onSave={this.editCard}
          onDelete={this.deleteCard}
          onCancel={this.editEnd}
        />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId]
});

export default connect(mapStateToProps)(Card);