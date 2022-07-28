import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faClose } from '@fortawesome/free-solid-svg-icons';

import {
  ContainerFile,
  ButtonRemove,
  FileName,
  ContentFileGeneral,
} from './style';

interface InputProps {
  fileName: string;
  onRemove: () => void;
}

type IProps = InputProps;

export default function ContentFile({ fileName, onRemove }: IProps) {
  const baseURL = process.env.REACT_APP_URL_API || '';
  return (
    <a href={`${baseURL}/files/${fileName}`} target="blank">
      <ContentFileGeneral>
        <ContainerFile>
          <FontAwesomeIcon icon={faFile} />
          <ButtonRemove onClick={() => onRemove()} type="button">
            <FontAwesomeIcon icon={faClose} />
          </ButtonRemove>
        </ContainerFile>
        <FileName>{fileName}</FileName>
      </ContentFileGeneral>
    </a>
  );
}
