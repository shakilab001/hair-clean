import React from "react";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    position: "absolute",
    top: "10%",
    left: "35%",
    right: "5%",
    bottom: "10%",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    padding: "20px",
  },
};

function QnaPopUp({ heading, description, setIsOpen, modalIsOpen }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
      <div style={{ marginRight: " 12%" }} className="heading-hair-style">
        {/* </div> */}
        <h1>{heading}</h1>
        <button
          style={{
            position: "absolute",
            right: "4%",
            top: "22px",
            border: "1px solid #ccc",
            borderRadius: "50%",
            background: "rgb(0, 201, 201)",
            color: "white",
            padding: "10px 16px",
          }}
          onClick={() => setIsOpen(false)}>
          X
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}>
        <div
          style={{
            flex: "0 0 50%",
          }}
          className="description-img">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}>
            <img height="auto" width="100%" src={description.image} alt="img" />
            {description.image2 && (
              <img
                height="auto"
                width="100%"
                src={description.image2}
                alt="img"
              />
            )}
          </div>
        </div>
        <div
          style={{
            flex: "0 0 50%",
            fontSize: "14px",
            padding: "5px 10px",
            textTransform: "capitalize",
          }}
          className="description">
          <p>{description.text}</p>
          {description.text1 && <br />}
          {description.text1 && <p>{description.text1}</p>}
          <br />
          <ul style={{ listStyleType: "disc", paddingLeft: "25px" }}>
            {description.text2 && <li> {description.text2} </li>}
            {description.text3 && <li> {description.text3} </li>}
            {description.text4 && <li> {description.text4} </li>}
            {description.text5 && <li> {description.text5} </li>}
            {description.text6 && <li> {description.text6} </li>}
          </ul>
          <br />
          {description.extra && <p> {description.extra} </p>}
        </div>
      </div>
    </Modal>
  );
}

export default QnaPopUp;
