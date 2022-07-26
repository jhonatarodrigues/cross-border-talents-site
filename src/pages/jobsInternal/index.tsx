import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faFlask,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';

import { IJobs } from '../../hooks/admin/useJobs';
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
} from './style';

interface IRequestState {
  item: IJobs;
  countryDesc: string;
}

export default function JobsInternal(): JSX.Element {
  const stateRequest = useLocation().state as IRequestState;

  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Default.Row justifyContent="space-between">
            <Default.Column>
              <Title>{stateRequest.item.jobTitle}</Title>
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
                <ButtonSocial>
                  <FontAwesomeIcon icon={faFacebookF} />
                </ButtonSocial>
                <Default.Space w="0.625rem" />
                <ButtonSocial>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </ButtonSocial>
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
                {stateRequest.item.jobTitle}
              </Default.Title3>
              <div>
                <ButtonSite bgColor={Default.color.gray}>
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
                  {stateRequest.countryDesc}
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
              dangerouslySetInnerHTML={{
                __html: stateRequest.item.description,
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
            <Default.Subtitle color={Default.color.gray}>
              You have a vocational level technical degree (Level 6/Level 7) or
              technical experience. Preferable technical background: mechanical,
              mechatronics or manufacturing engineering. You have affinity with
              technology. You are a team player and communicative strong. You
              are proactive and think along with the development of the
              department. Hands-on experience is preferred (mechanical mounting
              on machines or cars). You would like to relocate to the
              Netherlands. Willingness to fulfill a hands-on technician job for
              at least 2 years.
            </Default.Subtitle>

            <Default.Space h="5rem" />

            <Default.Title2 color={Default.color.blueBase}>
              Benefits
            </Default.Title2>
            <Default.Space h="1.25rem" />
            <Default.Subtitle color={Default.color.gray}>
              You have a vocational level technical degree (Level 6/Level 7) or
              technical experience. Preferable technical background: mechanical,
              mechatronics or manufacturing engineering. You have affinity with
              technology. You are a team player and communicative strong. You
              are proactive and think along with the development of the
              department. Hands-on experience is preferred (mechanical mounting
              on machines or cars). You would like to relocate to the
              Netherlands. Willingness to fulfill a hands-on technician job for
              at least 2 years.
            </Default.Subtitle>

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
