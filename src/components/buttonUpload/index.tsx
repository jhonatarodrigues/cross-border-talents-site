import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { ContentFiled, TextError, NameFIle, ContentButton } from './style';

interface InputProps {
  name: string;
  children: React.ReactNode;
}

const Input = styled('input')({
  display: 'none',
});

export default function ButtonUpload({ name, children }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState<HTMLInputElement>();
  const [fileName, setFileName] = useState('no file selected');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => {
        return inputValue;
      },
      clearValue: () => {
        setInputValue(undefined);
      },
    });
  }, [fieldName, registerField, inputValue]);

  const renderNameFile = useCallback(() => {
    return <NameFIle>{fileName}</NameFIle>;
  }, [fileName]);

  return (
    <ContentFiled className="contentField">
      <Stack direction="row" alignItems="center" spacing={2}>
        <ContentButton>
          <label htmlFor={fieldName}>
            <Input
              ref={inputRef}
              id={fieldName}
              multiple
              type="file"
              onChange={e => {
                setInputValue(e.target);
                if (e.target.files) {
                  setFileName(e.target.files[0].name);
                }
              }}
            />

            <Button variant="contained" component="span">
              {children}
            </Button>
          </label>
          {renderNameFile()}
        </ContentButton>
      </Stack>
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
