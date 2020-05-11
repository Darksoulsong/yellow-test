import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Container,
  Header,
  Button,
  Timeline,
  SVG,
  Logo,
  Products,
  SpeechBubble,
  Slider,
  AnimatedUnderline,
  AnimatedScratches,
  AnimatedArrow,
  IntroImageYellowWay,
  Hashtag,
  Footer,
} from '@components';
import {
  YellowWayRoot,
  YellowWayIntro,
  Section,
  YellowSection,
  Subheading,
  HashtagHeading,
  Box,
  BoxFooter,
  Top,
} from './styles';

export const YellowWay = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <Container id="page-top" fluid padding="0" paddingOnLarge="0">
      <YellowWayRoot>
        <Header />

        <Section>
          <Top>
            <Hashtag />
          </Top>

          <YellowWayIntro>
            <IntroImageYellowWay />
          </YellowWayIntro>
        </Section>

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
        </YellowSection>

        <Footer />
      </YellowWayRoot>
    </Container>
  );
};
