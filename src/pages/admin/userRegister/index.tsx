import React from 'react';

import Input from '../../../components/input';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';

export default function UserRegister(): JSX.Element {
  return (
    <ContentPage title="User Register">
      <ContentInput>
        <Input name="name" label="Name" />
        <Input name="email" label="E-mail" />
      </ContentInput>
      <ContentInput>
        <Input name="phone" label="Phone" />
        <Input name="status" label="status" />
      </ContentInput>
      <Button variant="contained">Save</Button>
    </ContentPage>
  );
}
