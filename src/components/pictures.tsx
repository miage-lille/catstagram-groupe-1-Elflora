import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { counterSelector, getSelectedPicture, picturesSelector, selectPicture, closeModal } from '../reducer';
import { Picture } from '../types/picture.type';
import ModalPortal from './modal';

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
  const dispatch = useDispatch();
  const pictures = useSelector(picturesSelector);
  const counter = useSelector(counterSelector);
  const selectedPicture = useSelector(getSelectedPicture);

  const handleClickPicture = (pic: Picture) => {
    dispatch(selectPicture(pic));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  
  return (
    <>
      <Container>
        {pictures.slice(0, counter).map((pic, index) => (
          <Image
            key={index}
            src={pic.previewFormat}
            alt={`Cat ${index}`}
            onClick={() => handleClickPicture(pic)}
          />
        ))}
      </Container>

      {selectedPicture._tag === 'Some' && (
        <ModalPortal
          largeFormat={selectedPicture.value.largeFormat}
          author={selectedPicture.value.author}
          close={handleCloseModal}
        />
      )}
    </>
  );
};

export default Pictures;

