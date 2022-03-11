import React from 'react';
import { Form } from '@unform/web';

import Input from '../../../components/input';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';

export default function UserRegister(): JSX.Element {
  return (
    <ContentPage title="User > João">
      <Form
        onSubmit={() => {
          console.log('subimit');
        }}
      >
        <Section label="User">
          <ContentInput>
            <Input name="name" label="Name" />
            <Input name="email" label="E-mail" />
          </ContentInput>
          <ContentInput>
            <Input name="phone" label="Phone" />
            <Input name="status" label="status" />
          </ContentInput>
        </Section>
        <Button variant="contained">Save</Button>
      </Form>
    </ContentPage>
  );
}
