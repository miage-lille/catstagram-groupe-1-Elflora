import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSelectedPicture, picturesSelector } from '../reducer';

const Container = styled.div`
  padding: 1rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  margin: 10px;
  object-fit: contain;
  transition: transform 1s;
  max-width: fit-content;
  &:hover {
    transform: scale(1.2);
  }
`;
const Pictures = () => {
  const pictures = useSelector(picturesSelector);
  return (
    <div>
      {pictures.map((pic, index) => (
        <img key={index} src={pic.previewFormat} alt={`Cat ${index}`} />
      ))}
    </div>
  );
};

/*const Pictures = () => {
  const dispatch = useDispatch();
  const pictures = useSelector(picturesSelector);
  const selectedPicture = useSelector(getSelectedPicture);

  return (
    <>
      <Container>
        {pictures.map((pic, index) => (
          <Image key={index} src={pic.previewFormat} alt={`Cat ${index}`} onClick={() => dispatch(selectPicture(pic))} />
        ))}
      </Container>

      {selectedPicture && (
        <ModalContainer onClick={() => dispatch(closeModal())}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src={selectedPicture.largeFormat} alt="Large Cat" style={{ maxWidth: '100%' }} />
            <p>Author: {selectedPicture.author}</p>
            <CloseButton onClick={() => dispatch(closeModal())}>Close</CloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};*/

export default Pictures;
