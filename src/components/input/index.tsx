import React, {
  useEffect,
  useRef,
  useState,
  InputHTMLAttributes,
  useCallback,
} from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { useField } from '@unform/core';
import { styled } from '@mui/material/styles';

import Default from '../../default';
import {
  formatCNPJ,
  formatCPF,
  formatCurrency,
  formatNumeric,
  formatCPFCNPJ,
} from '../../util/format';
import { InputField, ContentFiled, TextError } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  mask?: 'cpf' | 'phone' | 'cnpj' | 'currency' | 'numeric' | 'cpfCnpj';
}

type IProps = TextFieldProps & InputProps;

const CssTextField = styled(InputField)({
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

export default function Input({
  name,
  value: defaultValueSet,
  mask,
  ...rest
}: IProps) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => {
        return inputValue;
      },
      setValue: (_, setVal) => {
        setInputValue(setVal);
      },
      clearValue: () => {
        setInputValue('');
      },
    });
  }, [fieldName, registerField, inputValue]);

  useEffect(() => {
    if (defaultValueSet) {
      setInputValue(defaultValueSet);
    }
  }, [defaultValueSet]);

  const handleMask = useCallback(
    val => {
      let responseVal = val;

      if (mask === 'cpf') {
        responseVal = formatCPF(responseVal);
      } else if (mask === 'cnpj') {
        responseVal = formatCNPJ(responseVal);
      } else if (mask === 'currency') {
        responseVal = formatCurrency(responseVal);
      } else if (mask === 'numeric') {
        responseVal = formatNumeric(responseVal);
      } else if (mask === 'cpfCnpj') {
        responseVal = formatCPFCNPJ(responseVal);
      }

      setInputValue(responseVal);
    },
    [mask],
  );

  return (
    <ContentFiled className="contentField">
      <CssTextField
        ref={inputRef}
        id={fieldName}
        {...rest}
        variant="outlined"
        value={inputValue || defaultValue}
        onChange={(e: any) => handleMask(e.target.value)}
        size="small"
      />
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}

Input.defaultProps = {
  mask: '',
  value: '',
};
