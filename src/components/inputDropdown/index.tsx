import React, {
  useEffect,
  useRef,
  useState,
  InputHTMLAttributes,
  useCallback,
} from 'react';
import { SelectProps } from '@mui/material/Select';
import { useField } from '@unform/core';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { SelectField, ContentFiled, TextError } from './style';

export interface IOptionsDropdown {
  value: string;
  label: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: IOptionsDropdown[];
}

type IProps = SelectProps & InputProps;

export default function InputDropdown({ name, label, ...rest }: IProps) {
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

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  return (
    <ContentFiled className="contentField">
      <FormControl style={{ width: '100%' }}>
        <InputLabel id={`${fieldName}-label`}>{label}</InputLabel>
        <SelectField
          ref={inputRef}
          id={fieldName}
          labelId={`${fieldName}-label`}
          value={inputValue || defaultValue}
          label={label}
          onChange={event => {
            handleChange(String(event.target.value));
          }}
          {...rest}
        >
          {rest.options.map(option => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </SelectField>
      </FormControl>
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
