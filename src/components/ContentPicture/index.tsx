import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { ContainerPicture, ButtonRemove } from './style';

interface InputProps {
  pictureUrl: string;
  onRemove: () => void;
}

type IProps = InputProps;

export default function ContentPicture({ pictureUrl, onRemove }: IProps) {
  return (
    <ContainerPicture
      style={{
        backgroundImage: `url(http://localhost:4000/files/${pictureUrl})`,
      }}
    >
      <ButtonRemove onClick={() => onRemove()} type="button">
        <FontAwesomeIcon icon={faClose} />
      </ButtonRemove>
    </ContainerPicture>
  );
}
