import React, { useRef, useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useField } from '@unform/core';
import { styled } from '@mui/material/styles';

import { ContentFiled, TextError } from './style';

interface IProps extends SwitchProps {
  label: string;
  name: string;
  valueDefault?: boolean;
}

export default function SwitchLabels({
  label,
  name,
  valueDefault,
  ...res
}: IProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [inputValue, setInputValue] = useState<boolean>(false);

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
        setInputValue(false);
      },
    });
  }, [fieldName, registerField, inputValue]);

  useEffect(() => {
    setInputValue(valueDefault || false);
  }, [valueDefault]);

  const SwitchStyled = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  return (
    <ContentFiled className="contentField">
      <FormGroup>
        <FormControlLabel
          control={
            <SwitchStyled
              ref={inputRef}
              checked={inputValue}
              onChange={() => setInputValue(prev => !prev)}
              name={name}
              {...res}
            />
          }
          label={label}
        />
      </FormGroup>
      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
SwitchLabels.defaultProps = {
  valueDefault: false,
};
