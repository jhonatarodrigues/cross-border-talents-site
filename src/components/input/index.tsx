import * as React from 'react';
import { TextFieldProps } from '@mui/material/TextField';

import { InputField } from './style';

export default function Input({ ...rest }: TextFieldProps) {
  return <InputField id="outlined-basic" {...rest} variant="outlined" />;
}
