import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal';
import { GetCountries } from '../../../hooks/admin/useCountry';
import {
  AddTestimonial,
  ITestimonialSend,
} from '../../../hooks/admin/useTestimonials';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import InputDatePicker from '../../../components/inputDatePicker';
import Editor from '../../../components/editor';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import { SimpleFileUpload } from '../../../hooks/admin/useUpload';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';
import ButtonUpload from '../../../components/buttonUpload';

export default function TestimonialsRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );

  const handleSubmit: SubmitHandler<ITestimonialSend> = useCallback(
    async (data: ITestimonialSend) => {
      const infoData = data;
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          date: Yup.date().required(),
          country: Yup.string().required(),
          testimonial: Yup.string().required(),
        });

        await schema.validate(infoData, {
          abortEarly: false,
        });

        if (infoData.upload) {
          const upload = await SimpleFileUpload(infoData.upload);
          if (upload) {
            infoData.picture = upload;
          }
        }

        AddTestimonial(infoData).then(response => {
          if (response.id) {
            Modal({
              icon: 'success',
              keyType: 'createdTestimonial',
              onClick: () => navigate('/admin/testimonials'),
            });
          }
        });
      } catch (err) {
        const validationErrors: Record<string, string> = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });

          formRef.current?.setErrors(validationErrors);
        }
      }
    },
    [navigate],
  );

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
      const options: IOptionsDropdown[] = countries.map(country => {
        return {
          value: country.code,
          label: country.name,
        };
      });
      setOptionsCountry(options);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <ContentPage
      title={`${Language.page.testimonials.testimonials} > ${Language.page.testimonials.newTestimonials}`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.testimonials.testimonials}>
          <ContentInput>
            <ButtonUpload name="upload">
              {Language.fields.sendPicture}
            </ButtonUpload>

            <Input name="name" label={Language.fields.name} />
            <InputDatePicker name="date" label={Language.fields.date} />
          </ContentInput>
          <ContentInput>
            <InputDropDown
              name="country"
              label={Language.fields.country}
              options={optionsCountry}
            />
            <Input name="observations" label={Language.fields.observations} />
          </ContentInput>
          <ContentInput>
            <Editor name="testimonial" label={Language.fields.testimonial} />
          </ContentInput>
        </Section>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Form>
    </ContentPage>
  );
}
