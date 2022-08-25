import '@progress/kendo-theme-default/dist/all.css';
import React, { useEffect, useRef, useState } from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { useField } from '@unform/core';
import {
  Editor as EditorKendo,
  EditorTools,
  EditorProps,
} from '@progress/kendo-react-editor';

import { htmlURIDecode, htmlToText } from '../../util/format';
import { ContentFiled, TextError, Title } from './style';

interface InputProps extends EditorProps {
  name: string;
  label: string;
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

export default function Editor({ name, label, value: valueUser }: IProps) {
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
      <Title>{label}</Title>
      <EditorKendo
        ref={inputRef}
        tools={[
          [Bold, Italic, Underline],
          [Undo, Redo],
          [Link, Unlink],
          [AlignLeft, AlignCenter, AlignRight],
          [OrderedList, UnorderedList, Indent, Outdent],
        ]}
        defaultEditMode="div"
        contentStyle={{ height: 250, fontFamily: 'Open Sans' }}
        value={htmlURIDecode(inputValue)}
        onChange={e => setInputValue(htmlToText(e.html))}
        style={{ fontFamily: 'Open Sans' }}
      />

      {error && <TextError>{error}</TextError>}
    </ContentFiled>
  );
}
Editor.defaultProps = {
  value: '',
};
