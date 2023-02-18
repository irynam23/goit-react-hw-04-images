import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt=""
          onClick={() => setIsOpen(true)}
        />
      </li>
      {isOpen && <Modal largeImageURL={largeImageURL} setIsOpen={setIsOpen} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
