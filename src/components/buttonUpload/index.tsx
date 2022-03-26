import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { ContentFiled, TextError } from './style';

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

  return (
    <ContentFiled className="contentField">
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor={fieldName}>
          <Input
            ref={inputRef}
            accept="image/*"
            id={fieldName}
            multiple
            type="file"
            onChange={e => {
              setInputValue(e.target);
            }}
          />
          <Button variant="contained" component="span">
            {children}
          </Button>
        </label>
      </Stack>
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
