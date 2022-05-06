import React, { ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Default from '../../default';
import {
  BackgroundModal,
  ContentModal,
  Modal,
  ContentBlue,
  ButtonClose,
} from './style';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  textBlue?: React.ReactNode;
  onClose: () => void;
}

export default function CustomModal({
  children,
  textBlue,
  onClose,
}: IProps): JSX.Element {
  return (
    <BackgroundModal>
      <ContentModal>
        <ButtonClose onClick={() => onClose()}>
          <FontAwesomeIcon icon={faTimes} color={Default.color.gray} />
        </ButtonClose>
        <Modal>{children}</Modal>
        <Default.Space h="4.375rem" />
        {textBlue && <ContentBlue>{textBlue}</ContentBlue>}
      </ContentModal>
    </BackgroundModal>
  );
}

CustomModal.defaultProps = {
  textBlue: null,
};
