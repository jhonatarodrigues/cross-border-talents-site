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
import { styled } from '@mui/material/styles';

import Default from '../../default';
import { SelectField, ContentFiled, TextError } from './style';

export interface IOptionsDropdown {
  value: string;
  label: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  options: IOptionsDropdown[];
  value?: string;
  typeSize?: 'small' | 'medium' | undefined;

  onChangeCustom?: (value: string) => void;
}

type IProps = SelectProps & InputProps;

const FormControlS = styled(FormControl)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    padding: '0px',
    borderRadius: '0.625rem',
    // '& fieldset': {
    //   borderColor: 'red',
    // },
    // '&:hover fieldset': {
    //   borderColor: 'yellow',
    // },
    '&.Mui-focused fieldset': {
      borderColor: Default.color.blue,
    },
  },
});

export default function InputDropdown({
  name,
  label,
  typeSize,
  value: valueProp,

  onChangeCustom,
  ...rest
}: IProps) {
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

  const handleChange = useCallback(
    (value: string) => {
      setInputValue(value);
      if (onChangeCustom) {
        onChangeCustom(value);
      }
    },
    [onChangeCustom],
  );

  useEffect(() => {
    if (valueProp) {
      setInputValue(valueProp);
    }
  }, [valueProp]);

  return (
    <ContentFiled className="contentField">
      <FormControlS style={{ width: '100%' }} size={typeSize}>
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
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectField>
      </FormControlS>
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
InputDropdown.defaultProps = {
  value: '',
  typeSize: 'small',
  onChangeCustom: () => null,
};
