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
  Footer,
} from '@components';
import {
  Hashtag,
  HashtagText,
  HashtagContainer,
  SVGManipulator,
} from '../WhoWeAre/styles';
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
  return (
    <Container id="page-top" fluid padding="0" paddingOnLarge="0">
      <YellowWayRoot>
        <Header />

        <Section>
          <Top>
            <Hashtag>
              <HashtagContainer>
                <HashtagText>
                  #YELLOW<strong>WAY</strong>
                </HashtagText>
                <SVG name="three-line-icon" />
              </HashtagContainer>
              <SVGManipulator
                data-aos="animate-curved-line"
                type="curved-line-icon"
              >
                <SVG name="curved-line-icon" />
              </SVGManipulator>
            </Hashtag>
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
