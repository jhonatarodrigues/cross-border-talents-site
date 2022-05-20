import React, { useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import IconLock from '../../assets/svg/lock';
import IconMultilingual from '../../assets/svg/multilingual';

import Default from '../../default';
import Input from '../../components/input';
import { SendContact } from '../../hooks/admin/useContact';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import ButtonSite from '../../components/buttonSite';
import Language from '../../language';
import Modal from '../../components/modal';
import {
  Banner,
  Title,
  ContentTitle,
  BlockContactUs,
  BlockContactUsForm,
  ContactBlockInfo,
  FormRender,
  BlockCheckUnits,
  CheckUnitItem,
  CheckUnitItemImage,
} from './style';

export default function Contact(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler = useCallback(async data => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        subject: Yup.string().required(),
        message: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await SendContact(data);

      if (response.data.sendContact) {
        Modal({
          icon: 'success',
          keyType: 'contactSuccess',
        });
        formRef.current?.reset();
      } else {
        Modal({
          icon: 'error',
          keyType: 'contactSuccess',
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
  }, []);

  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Default.Row>
            <ContentTitle>
              <Title>
                Our team is ready <br />
                to help you for any <br />
                questions
              </Title>
              <Default.Title2 color={Default.color.success}>
                SEND US A MESSAGE
              </Default.Title2>
            </ContentTitle>
          </Default.Row>
        </ContainerSite>
      </Banner>
      <BlockContactUs>
        <ContainerSite>
          <Default.Row>
            <div>
              <Default.Column>
                <Default.TitleH3 color={Default.color.success}>
                  Do you have <br />
                  any questions?
                </Default.TitleH3>
                <Default.Space h="1.875rem" />
                <Default.Row justifyContent="flex-start">
                  <Default.Column>
                    <IconMultilingual width={40} height={40} />
                    <Default.Space h="0.9375rem" />
                    <Default.Title2 color={Default.color.white}>
                      Contact <br />
                      our team
                    </Default.Title2>
                  </Default.Column>
                  <Default.Space w="3.125rem" />
                  <Default.Column>
                    <IconLock />
                    <Default.Space h="0.9375rem" />
                    <Default.Title2 color={Default.color.white}>
                      Privacy and <br />
                      security
                    </Default.Title2>
                  </Default.Column>
                </Default.Row>
              </Default.Column>
            </div>
            <BlockContactUsForm id="topCandidatesForm">
              <Default.Column justifyContent="space-between">
                <FormRender
                  ref={formRef}
                  onSubmit={handleSubmit}
                  onClick={() => formRef.current?.setErrors({})}
                >
                  <Default.Column>
                    <ContentInput>
                      <Input
                        name="name"
                        label={`${Language.fields.yourName} *`}
                        typeSize="medium"
                      />
                    </ContentInput>
                    <ContentInput>
                      <Input
                        name="email"
                        label={`${Language.fields.yourEmail} *`}
                        typeSize="medium"
                      />
                    </ContentInput>
                    <ContentInput>
                      <Input
                        name="subject"
                        label={`${Language.fields.subject} *`}
                        typeSize="medium"
                      />
                    </ContentInput>
                    <ContentInput>
                      <Input
                        name="message"
                        label={`${Language.fields.yourMessage} *`}
                        typeSize="medium"
                        height={120}
                        multiline
                        maxRows={Infinity}
                      />
                    </ContentInput>

                    <Default.Space h="0.9375rem" />
                    <Default.Row alignItens="center">
                      <ButtonSite bgColor={Default.color.spotlight}>
                        Send message
                      </ButtonSite>
                    </Default.Row>
                  </Default.Column>
                </FormRender>
              </Default.Column>
            </BlockContactUsForm>
          </Default.Row>
        </ContainerSite>
      </BlockContactUs>
      <BlockCheckUnits>
        <ContainerSite>
          <Default.Title color={Default.color.blueOriginal} textAlignCenter>
            Check our units
          </Default.Title>
          <Default.Space h="3.75rem" />
          <Default.Row>
            <CheckUnitItem>
              <Default.Row alignItens="center">
                <CheckUnitItemImage />
                <Default.Space w="3.125rem" />
                <Default.Column>
                  <Default.Row alignItens="center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      fontSize={17}
                      color={Default.color.success}
                    />
                    <Default.Space w="0.5rem" />
                    <Default.Title2 color={Default.color.blueOriginal}>
                      CBT Lisbon
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.25rem" />
                  <Default.Text color={Default.color.gray}>
                    Cais da Rocha Conde D&apos;Óbidos. <br />
                    Edifício LACS. 1350-352 Lisboa - Portugal
                  </Default.Text>
                  <Link to="/">
                    <Default.Text color={Default.color.gray}>
                      info@cbtalents.com
                    </Default.Text>
                  </Link>
                </Default.Column>
              </Default.Row>
            </CheckUnitItem>

            <CheckUnitItem>
              <Default.Row alignItens="center">
                <CheckUnitItemImage />
                <Default.Space w="3.125rem" />
                <Default.Column>
                  <Default.Row alignItens="center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      fontSize={17}
                      color={Default.color.success}
                    />
                    <Default.Space w="0.5rem" />
                    <Default.Title2 color={Default.color.blueOriginal}>
                      CBT Porto
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.25rem" />
                  <Default.Text color={Default.color.gray}>
                    Av. da Boavista, 1588 - 6.º andar <br />
                    Sala Bach. 4100-115 Porto
                  </Default.Text>
                  <Link to="/">
                    <Default.Text color={Default.color.gray}>
                      info@cbtalents.com
                    </Default.Text>
                  </Link>
                </Default.Column>
              </Default.Row>
            </CheckUnitItem>
          </Default.Row>
          <Default.Space h="3.125rem" />
          <Default.Row>
            <CheckUnitItem>
              <Default.Row alignItens="center">
                <CheckUnitItemImage />
                <Default.Space w="3.125rem" />
                <Default.Column>
                  <Default.Row alignItens="center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      fontSize={17}
                      color={Default.color.success}
                    />
                    <Default.Space w="0.5rem" />
                    <Default.Title2 color={Default.color.blueOriginal}>
                      CBT São Paulo
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.25rem" />
                  <Default.Text color={Default.color.gray}>
                    Alameda Santos, 415 - 10º andar <br />
                    Paraíso, São Paulo - SP, 01419-913
                  </Default.Text>
                  <Link to="/">
                    <Default.Text color={Default.color.gray}>
                      info@cbtalents.com
                    </Default.Text>
                  </Link>
                </Default.Column>
              </Default.Row>
            </CheckUnitItem>

            <CheckUnitItem>
              <Default.Row alignItens="center">
                <CheckUnitItemImage />
                <Default.Space w="3.125rem" />
                <Default.Column>
                  <Default.Row alignItens="center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      fontSize={17}
                      color={Default.color.success}
                    />
                    <Default.Space w="0.5rem" />
                    <Default.Title2 color={Default.color.blueOriginal}>
                      CBT Berlin
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.25rem" />
                  <Default.Text color={Default.color.gray}>
                    Potsdamer Platz 2, 5th floor <br />
                    10785 Berlin, Germany
                  </Default.Text>
                  <Link to="/">
                    <Default.Text color={Default.color.gray}>
                      info@cbtalents.com
                    </Default.Text>
                  </Link>
                </Default.Column>
              </Default.Row>
            </CheckUnitItem>
          </Default.Row>
          <Default.Space h="3.125rem" />
          <Default.Row>
            <CheckUnitItem>
              <Default.Row alignItens="center">
                <CheckUnitItemImage />
                <Default.Space w="3.125rem" />
                <Default.Column>
                  <Default.Row alignItens="center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      fontSize={17}
                      color={Default.color.success}
                    />
                    <Default.Space w="0.5rem" />
                    <Default.Title2 color={Default.color.blueOriginal}>
                      CBT London
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.25rem" />
                  <Default.Text color={Default.color.gray}>
                    Fenchurch Street Station New London <br />
                    House, 6 London Street <br />
                    London EC3R 7LP
                  </Default.Text>
                  <Link to="/">
                    <Default.Text color={Default.color.gray}>
                      info@cbtalents.com
                    </Default.Text>
                  </Link>
                </Default.Column>
              </Default.Row>
            </CheckUnitItem>

            <CheckUnitItem>
              <Default.Row alignItens="center">
                <CheckUnitItemImage />
                <Default.Space w="3.125rem" />
                <Default.Column>
                  <Default.Row alignItens="center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      fontSize={17}
                      color={Default.color.success}
                    />
                    <Default.Space w="0.5rem" />
                    <Default.Title2 color={Default.color.blueOriginal}>
                      CBT Évora
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.25rem" />
                  <Default.Text color={Default.color.gray}>
                    Parque Industrial e Tecnológico de <br />
                    Évora, Rua Circular Norte <br />
                    7005-841 Évora, Portugal
                  </Default.Text>
                  <Link to="/">
                    <Default.Text color={Default.color.gray}>
                      info@cbtalents.com
                    </Default.Text>
                  </Link>
                </Default.Column>
              </Default.Row>
            </CheckUnitItem>
          </Default.Row>
        </ContainerSite>
      </BlockCheckUnits>
    </ContentSite>
  );
}
