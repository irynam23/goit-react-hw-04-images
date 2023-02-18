import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, setIsOpen }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code !== 'Escape') {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [setIsOpen]);

  return (
    <div onClick={() => setIsOpen(false)}>
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
