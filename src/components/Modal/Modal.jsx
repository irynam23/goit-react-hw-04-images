import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, toggleModal }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code !== 'Escape') {
        return;
      }
      toggleModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    toggleModal();
  };
  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
