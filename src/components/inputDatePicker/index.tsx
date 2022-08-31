import React, { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useField } from '@unform/core';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ContentFiled, TextError } from './style';

interface InputProps {
  name: string;
  label: string;
  value?: Date;
  dateOnly?: boolean;
}

type IProps = InputProps;

export default function InputDatePicker({
  name,
  label,
  value: valueUser,
  dateOnly,
}: IProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState<Date | null | ''>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => {
        if (!inputValue) {
          return '';
        }
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

  useEffect(() => {
    if (valueUser) {
      setInputValue(valueUser);
    }
  }, [valueUser]);

  return (
    <ContentFiled className="contentField inputDatePicker">
      <LocalizationProvider dateAdapter={AdapterDateFns} size="small">
        {dateOnly ? (
          <DatePicker
            renderInput={props => <TextField {...props} />}
            label={label}
            value={inputValue}
            onChange={newValue => {
              setInputValue(newValue);
            }}
            inputFormat="dd/MM/yyyy"
            InputProps={{
              sx: {
                borderRadius: '0.625rem',
                padding: '0 0.625rem 0 0.3125rem',
                height: '2.5rem',
              },
            }}
          />
        ) : (
          <DateTimePicker
            renderInput={props => <TextField {...props} />}
            label={label}
            value={inputValue}
            onChange={newValue => {
              setInputValue(newValue);
            }}
            inputFormat="dd/MM/yyyy HH:mm"
            InputProps={{
              sx: {
                borderRadius: '0.625rem',
                padding: '0 0.625rem 0 0.3125rem',
                height: '2.5rem',
              },
            }}
          />
        )}
      </LocalizationProvider>
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}

InputDatePicker.defaultProps = {
  dateOnly: false,
  value: null,
};
