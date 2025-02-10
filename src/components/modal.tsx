import styled from 'styled-components';
import ReactDOM from 'react-dom';
import React from 'react';

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  
  &:hover {
    background: darkred;
  }
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80vh;
  border-radius: 5px;
`;

interface ModalProps {
  largeFormat: string;
  author: string;
  close(): void;
}

const Modal = ({ largeFormat, author, close }: ModalProps) => {
  console.log("Image URL:", largeFormat);
  return (
    /*<Container onClick={close}>  {}
      <ModalContent onClick={(e) => e.stopPropagation()}>  {}
        <Button onClick={close}>X</Button>
        <Image src={largeFormat} alt="Large Preview" />
      </ModalContent>
    </Container>*/

    <Container>
      <ModalContent>
        <Image src={largeFormat} alt="Large Preview" />
        <p>Photo by: {author}</p>
        <Button onClick={close}>X</Button>
      </ModalContent>
    </Container>
  );
};

const portalRoot = document.getElementById('modal');

const ModalPortal = ({ largeFormat, author, close }: ModalProps) =>
  portalRoot ? ReactDOM.createPortal(<Modal largeFormat={largeFormat} author={author} close={close}/>, portalRoot) : null;

export default ModalPortal;
