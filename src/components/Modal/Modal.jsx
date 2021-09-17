import React, { Component } from "react";
import PropTypes from "prop-types";
import { Overlay, ModalEl } from "./Modal.styled";

class Modal extends Component {
  componentDidMount() {
    if (this.props.selectedImage !== null) {
      window.addEventListener("keydown", this.handleKeyPress);
      document.body.className = "noScrollWhileModal";
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
    document.body.className = "";
  }

  handleKeyPress = (e) => {
    if (e.key === "Escape") {
      this.props.closeModal();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props.selectedImage;

    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalEl>
          <img src={src} alt={alt} />
        </ModalEl>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedImage: PropTypes.object,
};

export default Modal;
