import React, { useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-modal";
import { MainContext, useContext } from "../../hooks/Context";
import {
  StyledForm,
  StyledWrapper,
  StyledInput,
  StyledBtnWrapper,
  StyledSubmitBtn,
  StyledCloseBtn,
} from "./Form.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Form = () => {
  const { movies, setMovies } = useContext(MainContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({ value: "" });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal(id) {}

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (event) => {
    setState({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + state.value);
    event.preventDefault();
  };
  return (
    <>
      <Button variant="outlined" onClick={openModal}>
        Film Ekle <AddIcon />
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledForm onSubmit={handleSubmit}>
          <StyledWrapper>
            <StyledInput
              type="text"
              value={state.value}
              placeholder="Film Adı"
              onChange={handleChange}
            />
            <StyledInput
              type="text"
              value={state.value}
              placeholder="Raiting"
              onChange={handleChange}
            />
            <StyledInput
              type="text"
              value={state.value}
              placeholder="Language"
              onChange={handleChange}
            />
          </StyledWrapper>
          <StyledWrapper>
            <StyledInput
              type="text"
              value={state.value}
              placeholder="Release Date"
              onChange={handleChange}
            />
            <StyledInput
              type="text"
              value={state.value}
              placeholder="Media Type"
              onChange={handleChange}
            />
            <StyledInput
              type="text"
              value={state.value}
              placeholder="Description"
              onChange={handleChange}
            />
          </StyledWrapper>

          <StyledBtnWrapper>
            <StyledSubmitBtn type="submit" value="Submit">
              Filmi Ekle
            </StyledSubmitBtn>

            <StyledCloseBtn onClick={() => closeModal()}>Kapat</StyledCloseBtn>
          </StyledBtnWrapper>
        </StyledForm>
      </Modal>
    </>
  );
};

export default Form;
