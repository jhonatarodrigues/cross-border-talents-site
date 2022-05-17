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
  const baseURL = process.env.REACT_APP_URL_API;

  return (
    <ContainerPicture
      style={{
        backgroundImage: `url(${baseURL}/files/${pictureUrl})`,
      }}
    >
      <ButtonRemove onClick={() => onRemove()} type="button">
        <FontAwesomeIcon icon={faClose} />
      </ButtonRemove>
    </ContainerPicture>
  );
}
