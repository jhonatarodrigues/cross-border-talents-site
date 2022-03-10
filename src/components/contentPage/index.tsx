import React from 'react';

import Header from '../header';
import Nav from '../nav';
import Language from '../../language';
import Button from '../button';
import {
  Container,
  ContainerPages,
  ContentChildren,
  GridPage,
  Footer,
  TextFooter,
  HeaderPage,
  TitlePage,
  StylePage,
  PageHistory,
  ContentAction,
  ContentHeaderPage,
  ContentActionButtons,
} from './styles';

interface IProps {
  children: JSX.Element[] | JSX.Element;
  title: string;

  buttonNewLabel?: string;
  buttonNewClick?: () => void;
}
const defaultProps = {
  buttonNewLabel: '',
  buttonNewClick: () => null,
};

export default function ContentPage({
  children,
  title,

  buttonNewLabel = '',
  buttonNewClick = () => null,
}: IProps): JSX.Element {
  return (
    <Container>
      <Header />
      <ContainerPages>
        <Nav />
        <ContentChildren>
          <GridPage>
            <HeaderPage>
              <ContentHeaderPage>
                <PageHistory>teste {'>'} aaaa</PageHistory>
                <TitlePage>{title}</TitlePage>
              </ContentHeaderPage>
              <ContentActionButtons>
                {buttonNewLabel && (
                  <ContentAction>
                    {buttonNewLabel && (
                      <Button onClick={() => buttonNewClick()}>
                        {buttonNewLabel}
                      </Button>
                    )}
                  </ContentAction>
                )}
              </ContentActionButtons>
            </HeaderPage>

            <StylePage>{children}</StylePage>
          </GridPage>
          <Footer>
            <TextFooter>{Language.copright}</TextFooter>
          </Footer>
        </ContentChildren>
      </ContainerPages>
    </Container>
  );
}

ContentPage.defaultProps = defaultProps;
