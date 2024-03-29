import React, { useCallback, useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import {
  faLocationDot,
  faFlask,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';
import * as Yup from 'yup';

import { ApplyNow, IJobs, GetJob } from '../../hooks/admin/useJobs';
import { SimpleFileUpload } from '../../hooks/admin/useUpload';
import ContentFile from '../../components/ContentFile';
import ButtonUpload from '../../components/buttonUpload';
import { htmlURIDecode } from '../../util/format';
import Language from '../../language';
import Modal from '../../components/modal';
import CustomModal from '../../components/CustomModal';
import ContentInput from '../../components/contentInput';
import Input from '../../components/input';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ButtonSite from '../../components/buttonSite';
import Default from '../../default';
import {
  Banner,
  Title,
  BlockForEmployers,
  BlockFilter,
  ContainerTag,
  TagIcon,
  ButtonSocial,
  TextModal,
  InputCheck,
  FormRender,
} from './style';

interface IRequestState {
  item: IJobs;
  countryDesc: string;
}

export default function JobsInternal(): JSX.Element {
  const formRefRegister = useRef<FormHandles>(null);
  const params = useParams();
  const [job, setJob] = useState<IJobs>();
  const [url, setUrl] = useState('');
  const [modalRegister, setModalRegister] = useState(false);
  const [uploadCv, setUploadCV] = useState('');
  const stateRequest =
    params && params.item
      ? ({ item: {} as IJobs, countryDesc: '' } as IRequestState)
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        (useLocation().state as IRequestState);

  const HandleGetJobs = useCallback(async () => {
    if (!params || !params.item) {
      return;
    }
    const newId = params.item.split('--').pop();
    const response = await GetJob({ id: newId || '' });

    setJob(response);
  }, [params]);

  const handleSubmitRegister: SubmitHandler = useCallback(
    async data => {
      try {
        const infoData = data;
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        infoData.cv = '';
        if (uploadCv) {
          infoData.cv = uploadCv;
        }

        if (infoData.uploadCv) {
          const upload = await SimpleFileUpload(infoData.uploadCv);
          if (upload) {
            infoData.cv = upload;
          }
        }

        infoData.idJob = stateRequest.item.id;

        const response = await ApplyNow(infoData);
        if (response.data.applyNow) {
          Modal({ keyType: 'getCountries', icon: 'success' });
          setModalRegister(false);
        } else {
          Modal({ keyType: 'applyNow', icon: 'error' });
          setModalRegister(false);
        }
      } catch (err) {
        const validationErrors: Record<string, string> = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });

          formRefRegister.current?.setErrors(validationErrors);
        }
      }
    },
    [uploadCv, stateRequest],
  );

  const renderModalRegister = useCallback(() => {
    if (!modalRegister) {
      return null;
    }

    return (
      <CustomModal onClose={() => setModalRegister(false)}>
        <Default.Title2 color={Default.color.blueOriginal}>
          Register in the job
        </Default.Title2>
        <Default.Space h="1.875rem" />
        <FormRender
          ref={formRefRegister}
          onSubmit={handleSubmitRegister}
          onClick={() => formRefRegister.current?.setErrors({})}
        >
          <Default.Column>
            <ContentInput>
              <Input
                name="name"
                label={`${Language.fields.firstName} *`}
                typeSize="medium"
              />
              <Input
                name="lastName"
                label={`${Language.fields.lastName} *`}
                typeSize="medium"
              />
            </ContentInput>
            <ContentInput>
              <Input
                name="email"
                label={`${Language.fields.email} *`}
                typeSize="medium"
              />
            </ContentInput>
            {uploadCv && uploadCv !== 'undefined' ? (
              <ContentFile
                fileName={uploadCv}
                onRemove={() => {
                  setUploadCV('');
                }}
              />
            ) : (
              <ButtonUpload name="uploadCv">
                {Language.page.candidates.cvUpload}
              </ButtonUpload>
            )}

            <Default.Space h="2.5rem" />
            <Default.Row justifyContent="flex-end">
              <ButtonSite bgColor={Default.color.success}>Register</ButtonSite>
            </Default.Row>
          </Default.Column>
        </FormRender>
      </CustomModal>
    );
  }, [formRefRegister, handleSubmitRegister, modalRegister, uploadCv]);

  useEffect(() => {
    HandleGetJobs();
  }, [HandleGetJobs]);

  useEffect(() => {
    setUrl(
      `http://cbtalents.com/jobs/internal/${
        params && params.item ? job?.jobTitle : stateRequest.item.jobTitle
      }--${params && params.item ? job?.id : stateRequest.item.id}`,
    );
  }, [params, stateRequest, job]);

  return (
    <ContentSite>
      {renderModalRegister()}
      <Banner>
        <ContainerSite>
          <Default.Row justifyContent="space-between">
            <Default.Column>
              <Title>
                {params && params.item
                  ? job?.jobTitle
                  : stateRequest.item.jobTitle}
              </Title>
            </Default.Column>
            <Default.Column alignItens="flex-end" justifyContent="center">
              <Default.Title2
                color={Default.color.blueBase}
                style={{ textAlign: 'right' }}
              >
                Share this <br />
                Job Opportunity
              </Default.Title2>
              <Default.Row justifyContent="flex-end">
                <FacebookShareButton
                  url={url}
                  title={`${
                    params && params.item
                      ? job?.jobTitle
                      : stateRequest.item.jobTitle
                  } - Cross Border Talents`}
                  hashtag="#cbt" // #hashTag
                >
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </ButtonSocial>
                </FacebookShareButton>
                <Default.Space w="0.625rem" />
                <LinkedinShareButton
                  url={url}
                  title={`${
                    params && params.item
                      ? job?.jobTitle
                      : stateRequest.item.jobTitle
                  } - Cross Border Talents`}
                >
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </ButtonSocial>
                </LinkedinShareButton>
              </Default.Row>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </Banner>
      <BlockForEmployers>
        <ContainerSite>
          <BlockFilter>
            <Default.Row justifyContent="space-between">
              <Default.Title3 color={Default.color.blueOriginal}>
                {params && params.item
                  ? job?.jobTitle
                  : stateRequest.item.jobTitle}
              </Default.Title3>
              <div>
                <ButtonSite
                  bgColor={Default.color.blueOriginal}
                  onClick={() => {
                    setModalRegister(true);
                  }}
                >
                  register for the vacancy
                </ButtonSite>
                <Default.Space w="0.9375rem" />
                <ButtonSite
                  bgColor={Default.color.gray}
                  onClick={() => {
                    navigator.clipboard.writeText(url);
                    Modal({
                      keyType: 'copyUrlSendToAFriend',
                      icon: 'success',
                      onClick: () => {
                        setModalRegister(false);
                      },
                    });
                  }}
                >
                  Send to a friend
                </ButtonSite>
                <Default.Space w="0.9375rem" />
                <ButtonSite bgColor={Default.color.success}>
                  Apply now
                </ButtonSite>
              </div>
            </Default.Row>
            <Default.Space h="0.625rem" />
            <Default.Row>
              <ContainerTag>
                <TagIcon color={Default.color.success} />
                <Default.Text2 color={Default.color.gray}>
                  Full-time
                </Default.Text2>
              </ContainerTag>
              <Default.Space w="1.5625rem" />
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.blueBase}
                  fontSize={20}
                />
                <Default.Space w="0.3125rem" />
                <Default.Text color={Default.color.gray}>
                  {params && params.item
                    ? job?.country
                    : stateRequest.countryDesc || ''}
                </Default.Text>
              </div>
              <Default.Space w="1.5625rem" />
              <div>
                <FontAwesomeIcon
                  icon={faFlask}
                  color={Default.color.blueBase}
                  fontSize={20}
                />
                <Default.Space w="0.3125rem" />
                <Default.Text color={Default.color.gray}>
                  Junior | Intermediate | Senior
                </Default.Text>
              </div>
            </Default.Row>
            <Default.Space h="2.5rem" />

            <Default.Title2 color={Default.color.blueBase}>
              Job description
            </Default.Title2>
            <Default.Space h="1.25rem" />
            <Default.Subtitle
              color={Default.color.gray}
              className="textEditor"
              dangerouslySetInnerHTML={{
                __html:
                  params && params.item
                    ? htmlURIDecode(job?.description || '')
                    : htmlURIDecode(stateRequest.item.description),
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            />

            <Default.Space h="5rem" />

            <Default.Title2 color={Default.color.blueBase}>
              Requirements
            </Default.Title2>
            <Default.Space h="1.25rem" />
            <Default.Subtitle
              color={Default.color.gray}
              className="textEditor"
              dangerouslySetInnerHTML={{
                __html:
                  params && params.item
                    ? htmlURIDecode(job?.requirements || '')
                    : htmlURIDecode(stateRequest.item.requirements || ''),
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            />

            <Default.Space h="5rem" />

            <Default.Title2 color={Default.color.blueBase}>
              Benefits
            </Default.Title2>
            <Default.Space h="1.25rem" />
            <Default.Subtitle
              color={Default.color.gray}
              className="textEditor"
              dangerouslySetInnerHTML={{
                __html:
                  params && params.item
                    ? htmlURIDecode(job?.benefits || '')
                    : htmlURIDecode(stateRequest.item.benefits || ''),
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            />

            <Default.Space h="3.75rem" />
            <Default.Row>
              <a
                href="https://apply.workable.com/crossbordertalents/"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonSite bgColor={Default.color.blueOriginal}>
                  see more opportunities
                </ButtonSite>
              </a>
            </Default.Row>

            <Default.Space h="3.75rem" />

            <Link to="/jobs">
              <Default.Title2 color={Default.color.blueOriginal}>
                <FontAwesomeIcon icon={faArrowLeft} />
                &nbsp; Return to all Jobs Opportunities
              </Default.Title2>
            </Link>
          </BlockFilter>
        </ContainerSite>
      </BlockForEmployers>
    </ContentSite>
  );
}
