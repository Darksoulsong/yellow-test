import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Logo, IntroImageYellowWay, Hashtag, DefaultLayout } from '@components';
import {
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
    <DefaultLayout>
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
    </DefaultLayout>
  );
};
