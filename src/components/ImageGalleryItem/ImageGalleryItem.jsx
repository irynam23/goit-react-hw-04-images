import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = e => {
    if (e.code !== 'Escape') {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

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
      {isOpen && (
        <Modal largeImageURL={largeImageURL} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
