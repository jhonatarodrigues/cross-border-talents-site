import React, { useState } from 'react';
// import languageSelected from '../../language/index';

import Header from '../header';
import Nav from '../nav';
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
  const [pathHistory, setPathHistory] = useState<JSX.Element>();

  return (
    <Container>
      <Header />
      <ContainerPages>
        <Nav
        // createRoutePath={val => {
        //   setPathHistory(val);
        // }}
        />
        <ContentChildren>
          <GridPage>
            <HeaderPage>
              <PageHistory>{pathHistory}</PageHistory>
              <TitlePage>{title}</TitlePage>
            </HeaderPage>
            {buttonNewLabel && (
              <ContentAction>
                {/* {buttonNewLabel && (
                  <Button
                    label={buttonNewLabel}
                    loading={false}
                    onClick={() => buttonNewClick()}
                  />
                )} */}
              </ContentAction>
            )}
            <StylePage>{children}</StylePage>
          </GridPage>
          <Footer>
            <TextFooter>
              {/* {languageSelected.TextFooter.allRightsReserved} */}
              aaaa
            </TextFooter>
          </Footer>
        </ContentChildren>
      </ContainerPages>
    </Container>
  );
}

ContentPage.defaultProps = defaultProps;
