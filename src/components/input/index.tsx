import React, { useEffect, useRef, useState, InputHTMLAttributes } from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { useField } from '@unform/core';

import { InputField, ContentFiled, TextError } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

type IProps = TextFieldProps & InputProps;

export default function Input({ name, ...rest }: IProps) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => {
        return inputValue;
      },
      setValue: (_, value) => {
        setInputValue(value);
      },
      clearValue: () => {
        setInputValue('');
      },
    });
  }, [fieldName, registerField, inputValue]);

  return (
    <ContentFiled className="contentField">
      <InputField
        ref={inputRef}
        id={fieldName}
        {...rest}
        variant="outlined"
        value={inputValue || defaultValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
