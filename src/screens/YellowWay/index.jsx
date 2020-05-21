import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
          <IntroImageYellowWay />
        </YellowWayIntro>
      </Section>

      <Container>
        <Text align="center" weight="500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vel repellendus debitis magnam veniam illum velit dicta quidem quis
          quaerat delectus, nemo earum vero cupiditate. Ab voluptatem possimus
          iusto dolorum?
        </Text>
      </Container>

      <YellowSection>
        <Subheading>
          <strong>Gostou?</strong> Então venha <br />
          fazer parte do nosso time.
        </Subheading>

        <Box>
          <img alt="Yellow Team" src="/images/yellow-team-image.png" />
          <BoxFooter>
            <Logo variant="alt" />
          </BoxFooter>
        </Box>

        <HashtagHeading>
          #YELLOW<strong>TEAM</strong>
        </HashtagHeading>

        <Button variant="black">Cadastrar</Button>
      </YellowSection>
    </DefaultLayout>
  );
};
