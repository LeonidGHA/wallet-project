import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import css from './Modal.module.scss';

const modal = document.querySelector('#modal');

const Modal = ({ onClick, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', onClickEscClose);

    return () => {
      document.addEventListener('keydown', onClickEscClose);
    };
  });

  const onClickEscClose = ({ code }) => {
    if (code === `Escape`) {
      onClick();
    }
  };

  const backdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={backdropClose}>
      <div className={css.modal}>{children}</div>
    </div>,
    modal
  );
};

export default Modal;
