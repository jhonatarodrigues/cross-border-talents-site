import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import Modal from '../../../components/modal';
import { GetCountries } from '../../../hooks/admin/useCountry';
import {
  AddTestimonial,
  ITestimonialSend,
  ITestimonials,
  UpdateTestimonial,
} from '../../../hooks/admin/useTestimonials';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import ContentPicture from '../../../components/ContentPicture';
import InputDatePicker from '../../../components/inputDatePicker';
import Editor from '../../../components/editor';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import { SimpleFileUpload } from '../../../hooks/admin/useUpload';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';
import ButtonUpload from '../../../components/buttonUpload';

interface ITestimonialRegister {
  testimonial: ITestimonials;
}

export default function TestimonialsRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const location = useLocation();
  const params = useMemo(
    () => (location?.state as ITestimonialRegister) || null,
    [location],
  );
  const [uploadPicture, setUploadPicture] = useState(
    params?.testimonial.picture || '',
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

        if (uploadPicture) {
          infoData.picture = uploadPicture;
        }

        if (infoData.upload) {
          const upload = await SimpleFileUpload(infoData.upload);
          if (upload) {
            infoData.picture = upload;
          }
        }

        if (params?.testimonial.id) {
          const newInfoDate = {
            ...infoData,
            id: params.testimonial.id,
          };
          UpdateTestimonial(newInfoDate).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'updateTestimonials',
                onClick: () => navigate('/admin/testimonials'),
              });
            }
          });
        } else {
          AddTestimonial(infoData).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'createdTestimonial',
                onClick: () => navigate('/admin/testimonials'),
              });
            }
          });
        }
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
    [navigate, params, uploadPicture],
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

  console.log(params);
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
            {uploadPicture ? (
              <ContentPicture
                pictureUrl={uploadPicture}
                onRemove={() => {
                  setUploadPicture('');
                }}
              />
            ) : (
              <ButtonUpload name="upload">
                {Language.fields.sendPicture}
              </ButtonUpload>
            )}

            <Input
              name="name"
              label={`${Language.fields.name} *`}
              value={params?.testimonial.name}
            />
            <InputDatePicker
              name="date"
              label={`${Language.fields.date} *`}
              value={
                new Date(parseInt(params?.testimonial.date, 10) || new Date())
              }
            />
          </ContentInput>
          <ContentInput>
            <InputDropDown
              name="country"
              label={`${Language.fields.country} *`}
              options={optionsCountry}
              value={params?.testimonial.country}
            />
            <Input
              name="observations"
              label={Language.fields.observations}
              value={params?.testimonial.observations}
            />
          </ContentInput>
          <ContentInput>
            <Editor
              name="testimonial"
              label={`${Language.fields.testimonial} *`}
              value={params?.testimonial.testimonial}
            />
          </ContentInput>
        </Section>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Form>
    </ContentPage>
  );
}
