import '@progress/kendo-theme-default/dist/all.css';
import React, { useEffect, useRef, useState } from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { useField } from '@unform/core';
import {
  Editor as EditorKendo,
  EditorTools,
  EditorProps,
} from '@progress/kendo-react-editor';

import { ContentFiled, TextError, Title } from './style';

interface InputProps extends EditorProps {
  name: string;
  value?: string;
}

type IProps = TextFieldProps & InputProps;

const {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  Link,
  Unlink,
} = EditorTools;

export default function Editor({ name, value: valueUser }: IProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);
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

  useEffect(() => {
    if (valueUser) {
      setInputValue(valueUser);
    }
  }, [valueUser]);

  return (
    <ContentFiled className="contentField">
      <Title>{fieldName}</Title>
      <EditorKendo
        ref={inputRef}
        tools={[
          [Bold, Italic, Underline],
          [Undo, Redo],
          [Link, Unlink],
          [AlignLeft, AlignCenter, AlignRight],
          [OrderedList, UnorderedList, Indent, Outdent],
        ]}
        contentStyle={{ height: 250 }}
        value={inputValue}
        onChange={e => setInputValue(e.html)}
      />

      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
Editor.defaultProps = {
  value: '',
};
