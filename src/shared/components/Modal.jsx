import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 20%;
  background: rgba(0, 0, 0, 0);
  opacity : 0.8
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  zIndex : 10;
`;

const ModalWrapper = styled.div`
  width: auto;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ action, title, description, showModal, setShowModal }) => {
  const modalRef = useRef();
  const [inputTitle, setInputTitle] = useState('')
  const [inputDes, setInputDes] = useState('')

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (

    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>

              <ModalContent>
                <div className='moda-body'>
                  <div style={{ marginBottom: 16 }} className="col-12">
                    <div className="form-group col-12">
                      <label>TITLE</label>
                      <input value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} type="text" className="form-control force-inline" />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }} className="col-12">
                    <div className="form-group col-12">
                      <label>DESCRIPTION</label>
                      <input value={inputDes} onChange={(e) => setInputDes(e.target.value)} type="text" className="form-control force-inline" />
                    </div>
                  </div>

                </div>
                <div className='modal-footer'>
                  <button onClick={() => setShowModal(prev => !prev)} type='button' className='btn btn-secondary'>Cancel</button>
                  <button type='submit' className='btn btn-primary'>{action}</button>
                </div>


              </ModalContent>
              {/* <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              /> */}
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};