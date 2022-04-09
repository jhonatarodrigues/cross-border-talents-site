import React, { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useField } from '@unform/core';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { ContentFiled, TextError } from './style';

interface InputProps {
  name: string;
  label: string;
}

type IProps = InputProps;

export default function InputDatePicker({ name, label }: IProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState<Date | null>(new Date());

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
        setInputValue(null);
      },
    });
  }, [fieldName, registerField, inputValue]);

  return (
    <ContentFiled className="contentField">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={props => <TextField {...props} />}
          label={label}
          value={inputValue}
          onChange={newValue => {
            setInputValue(newValue);
          }}
          inputFormat="dd/MM/yyyy HH:mm"
        />
      </LocalizationProvider>
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
