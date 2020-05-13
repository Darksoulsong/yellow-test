import React from 'react';
import styled from 'styled-components';
import Logo from '../../../public/images/logo.svg';
import LogoAlt from '../../../public/images/logo-alt.svg';
import LogoTransparentStroked from '../../../public/images/logo-transparent-stroked.svg';
import HanddrawnArrow from '../../../public/images/handdrawn-arrow.svg';
import HanddrawnScratches from '../../../public/images/handdrawn-scratches.svg';
import HanddrawnScratchedCircle from '../../../public/images/handdrawn-scratched-circle5.svg';
import HanddrawnCircle from '../../../public/images/handdrawn-circle.svg';
import ExecIcon from '../../../public/images/exec-icon.svg';
import ExpressIcon from '../../../public/images/express-icon.svg';
import RPOIcon from '../../../public/images/rpo-icon.svg';
import TechIcon from '../../../public/images/tech-icon.svg';
import BubblesIcon from '../../../public/images/bubbles-icon.svg';
import ArrowIcon from '../../../public/images/arrow-icon.svg';
import LinkedinIcon from '../../../public/images/linkedin-icon.svg';
import YoutubeIcon from '../../../public/images/youtube-icon.svg';
import InstagramIcon from '../../../public/images/instagram-icon.svg';
import BoxIcon from '../../../public/images/box-icon.svg';
import IdeasIcon from '../../../public/images/ideas-icon.svg';
import MagnifierUserIcon from '../../../public/images/magnifier-user-icon.svg';
import PhoneEmailIcon from '../../../public/images/phone-email-icon.svg';
import AddUserIcon from '../../../public/images/add-user-icon.svg';
import BubbleEditIcon from '../../../public/images/bubble-edit-icon.svg';
import OpenIcon from '../../../public/images/open-icon.svg';
import OpenKey from '../../../public/images/open-key.svg';
import TeamIcon from '../../../public/images/team-icon.svg';
import UmbrellaIcon from '../../../public/images/umbrella-icon.svg';
import BulletListIcon from '../../../public/images/bulletlist-icon.svg';
import HeartIcon from '../../../public/images/heart-icon.svg';
import CloudIcon from '../../../public/images/cloud-icon.svg';
import PlanetIcon from '../../../public/images/planet-icon.svg';
import PlaneIcon from '../../../public/images/plane-icon.svg';
import SuitcaseIcon from '../../../public/images/suitcase-icon.svg';
import LightbulbIcon from '../../../public/images/lightbulb-icon.svg';
import CoffeeIcon from '../../../public/images/coffee-icon.svg';
import TargetIcon from '../../../public/images/target-icon.svg';
import ClockIcon from '../../../public/images/clock-icon.svg';
import ChartIcon from '../../../public/images/chart-icon.svg';
import LetterIcon from '../../../public/images/letter-icon.svg';
import HouseIcon from '../../../public/images/house-icon.svg';
import BikeIcon from '../../../public/images/bike-icon.svg';
import DarkUmbrellaIcon from '../../../public/images/darkumbrella-icon.svg';
import CalculatorIcon from '../../../public/images/calculator-icon.svg';
import StarIcon from '../../../public/images/star-icon.svg';
import PigIcon from '../../../public/images/pig-icon.svg';
import HeadphonesIcon from '../../../public/images/headphones-icon.svg';
import TelephoneIcon from '../../../public/images/telephone-icon.svg';
import MonitorIcon from '../../../public/images/monitor-icon.svg';
import LensIcon from '../../../public/images/lens-icon.svg';
import CameraIcon from '../../../public/images/camera-icon.svg';
import BagIcon from '../../../public/images/bag-icon.svg';
import LinesCircleIcon from '../../../public/images/lines-circle-icon.svg';
import ThreeLineIcon from '../../../public/images/three-line-icon.svg';
import CurvedLineIcon from '../../../public/images/curved-line-icon.svg';
import YWIcon from '../../../public/images/yw-icon.svg';
import StarWhiteIcon from '../../../public/images/star-white-icon.svg';
import HanddrawnArrowIcon1 from '../../../public/images/handdrawn-arrow1.svg';
import HanddrawnArrowIcon2 from '../../../public/images/handdrawn-arrow2.svg';
import HanddrawnArrowIcon3 from '../../../public/images/handdrawn-arrow3.svg';
import HanddrawnArrowIcon4 from '../../../public/images/handdrawn-arrow4.svg';
import HanddrawnArrowIcon5 from '../../../public/images/handdrawn-arrow5.svg';
import HanddrawnArrowIcon6 from '../../../public/images/handdrawn-arrow6.svg';
import KeyIcon from '../../../public/images/key-icon.svg';
import FacebookIcon from '../../../public/images/facebook-icon.svg';
import GoogleIcon from '../../../public/images/google-icon.svg';
import ArrowIcon2 from '../../../public/images/arrow-icon2.svg';

const enhance = Component => {
  const SVGRoot = styled(Component)`
    ${({ size }) => size && `width: ${size}; height: auto;`}
    ${({ invert }) => invert && `transform: rotate(-180deg)`};
  `;
  return SVGRoot;
};

const getImage = name => {
  switch (name) {
    case 'handdrawn-arrow':
      return enhance(HanddrawnArrow);
    case 'logo-transparent-stroked':
      return enhance(LogoTransparentStroked);
    case 'handdrawn-scratches':
      return enhance(HanddrawnScratches);
    case 'handdrawn-circle':
      return enhance(HanddrawnCircle);
    case 'exec-icon':
      return enhance(ExecIcon);
    case 'express-icon':
      return enhance(ExpressIcon);
    case 'rpo-icon':
      return enhance(RPOIcon);
    case 'tech-icon':
      return enhance(TechIcon);
    case 'bubbles-icon':
      return enhance(BubblesIcon);
    case 'arrow-icon':
      return enhance(ArrowIcon);
    case 'arrow-icon2':
      return enhance(ArrowIcon2);
    case 'instagram-icon':
      return enhance(InstagramIcon);
    case 'youtube-icon':
      return enhance(YoutubeIcon);
    case 'linkedin-icon':
      return enhance(LinkedinIcon);
    case 'logo-alt':
      return enhance(LogoAlt);
    case 'box-icon':
      return enhance(BoxIcon);
    case 'ideas-icon':
      return enhance(IdeasIcon);
    case 'magnifier-user-icon':
      return enhance(MagnifierUserIcon);
    case 'phone-email-icon':
      return enhance(PhoneEmailIcon);
    case 'add-user-icon':
      return enhance(AddUserIcon);
    case 'bubble-edit-icon':
      return enhance(BubbleEditIcon);
    case 'team-icon':
      return enhance(TeamIcon);
    case 'open-icon':
      return enhance(OpenIcon);
    case 'open-key':
      return enhance(OpenKey);
    case 'umbrella-icon':
      return enhance(UmbrellaIcon);
    case 'bulletlist-icon':
      return enhance(BulletListIcon);
    case 'heart-icon':
      return enhance(HeartIcon);
    case 'cloud-icon':
      return enhance(CloudIcon);
    case 'planet-icon':
      return enhance(PlanetIcon);
    case 'plane-icon':
      return enhance(PlaneIcon);
    case 'suitcase-icon':
      return enhance(SuitcaseIcon);
    case 'lightbulb-icon':
      return enhance(LightbulbIcon);
    case 'coffee-icon':
      return enhance(CoffeeIcon);
    case 'target-icon':
      return enhance(TargetIcon);
    case 'clock-icon':
      return enhance(ClockIcon);
    case 'chart-icon':
      return enhance(ChartIcon);
    case 'letter-icon':
      return enhance(LetterIcon);
    case 'house-icon':
      return enhance(HouseIcon);
    case 'bike-icon':
      return enhance(BikeIcon);
    case 'darkumbrella-icon':
      return enhance(DarkUmbrellaIcon);
    case 'calculator-icon':
      return enhance(CalculatorIcon);
    case 'star-icon':
      return enhance(StarIcon);
    case 'pig-icon':
      return enhance(PigIcon);
    case 'headphones-icon':
      return enhance(HeadphonesIcon);
    case 'telephone-icon':
      return enhance(TelephoneIcon);
    case 'monitor-icon':
      return enhance(MonitorIcon);
    case 'lens-icon':
      return enhance(LensIcon);
    case 'camera-icon':
      return enhance(CameraIcon);
    case 'bag-icon':
      return enhance(BagIcon);
    case 'handdrawn-scratched-circle':
      return enhance(HanddrawnScratchedCircle);
    case 'lines-circle-icon':
      return enhance(LinesCircleIcon);
    case 'three-line-icon':
      return enhance(ThreeLineIcon);
    case 'yw-icon':
      return enhance(YWIcon);
    case 'curved-line-icon':
      return enhance(CurvedLineIcon);
    case 'key-icon':
      return enhance(KeyIcon);
    case 'facebook-icon':
      return enhance(FacebookIcon);
    case 'google-icon':
      return enhance(GoogleIcon);
    case 'star-white-icon':
      return enhance(StarWhiteIcon);
    case 'handdrawn-arrow1':
      return enhance(HanddrawnArrowIcon1);
    case 'handdrawn-arrow2':
      return enhance(HanddrawnArrowIcon2);
    case 'handdrawn-arrow3':
      return enhance(HanddrawnArrowIcon3);
    case 'handdrawn-arrow4':
      return enhance(HanddrawnArrowIcon4);
    case 'handdrawn-arrow5':
      return enhance(HanddrawnArrowIcon5);
    case 'handdrawn-arrow6':
      return enhance(HanddrawnArrowIcon6);
    case 'logo':
    default:
      return enhance(Logo);
  }
};

export default React.memo(function SVG({ name, size, invert, ...rest }) {
  const Component = getImage(name);

  return <Component size={size} invert={invert} {...rest} />;
});
