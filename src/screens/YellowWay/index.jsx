import React from 'react';
import AOS from 'aos';

import {
  Logo,
  IntroImageYellowWay,
  Hashtag,
  DefaultLayout,
  Text,
  Button,
} from '@components';
import {
  YellowWayIntro,
  Section,
  YellowSection,
  Subheading,
  HashtagHeading,
  Box,
  BoxFooter,
  Top,
  Container,
  TextHolder,
  ButtonHolder,
} from './styles';

export const YellowWay = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <DefaultLayout>
      <Section>
        <Top>
          <Hashtag />
        </Top>

        <YellowWayIntro>
          <div>
            <IntroImageYellowWay />
          </div>
        </YellowWayIntro>
      </Section>

      <Container>
        <TextHolder>
          <Text align="center" weight="300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam{' '}
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu
          </Text>
        </TextHolder>
      </Container>

      <YellowSection id="entre-para-o-time">
        <Subheading>
          <strong>Gostou?</strong> Então venha <br />
          fazer parte do nosso time.
        </Subheading>

        <Box>
          <img alt="Yellow Team" src="/images/yellow-team-image2.png" />
          <BoxFooter>
            <Logo variant="alt" />
          </BoxFooter>
        </Box>

        <HashtagHeading>
          #YELLOW<strong>TEAM</strong>
        </HashtagHeading>

        <ButtonHolder>
          <Button variant="black">Cadastrar</Button>
        </ButtonHolder>
      </YellowSection>
    </DefaultLayout>
  );
};
