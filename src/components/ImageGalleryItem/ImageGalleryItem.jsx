import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(prev => !prev);
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt=""
          onClick={toggleModal}
        />
      </li>
      {isOpen && (
        <Modal largeImageURL={largeImageURL} toggleModal={toggleModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
