// Libraries
import React, { useState } from 'react';

// Components
import Button from '@components/Button';
import Form from '@components/Form';

// CSS
import './index.styles.css';

interface IModalProps {
  buttonModalName: string;
  titleMessage: string;
  mainMessage: string;
  onClickConfirm?: () => void;
}

const Modal: React.FC<IModalProps> = ({
  buttonModalName = 'Open Modal',
  titleMessage = '',
  mainMessage = '',
  onClickConfirm,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='formModal'>
      <Button label={buttonModalName} onClick={toggleModal} />
      {/* Return a modal */}
      {modal && (
        <div className='modal'>
          <div className='overlay'>
            <div className='modal-content'>
              <div className='closeModal' onClick={toggleModal}>
                <Button style='outlined' label='X' size='large' />
              </div>
              <div className='modalMessage'>
                <h3 className='titleMessage'>{titleMessage}</h3>
                <p className='mainMessage'>{mainMessage}</p>
                <div className='buttonsMessage'>
                  <Button size='large' onClick={onClickConfirm} label='Yes' />
                  <Button size='large' onClick={toggleModal} label='Cancel' />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
