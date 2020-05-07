import React from 'react';
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

const getImage = name => {
  switch (name) {
    case 'handdrawn-arrow':
      return HanddrawnArrow;
    case 'logo-transparent-stroked':
      return LogoTransparentStroked;
    case 'handdrawn-scratches':
      return HanddrawnScratches;
    case 'handdrawn-circle':
      return HanddrawnCircle;
    case 'exec-icon':
      return ExecIcon;
    case 'express-icon':
      return ExpressIcon;
    case 'rpo-icon':
      return RPOIcon;
    case 'tech-icon':
      return TechIcon;
    case 'bubbles-icon':
      return BubblesIcon;
    case 'arrow-icon':
      return ArrowIcon;
    case 'instagram-icon':
      return InstagramIcon;
    case 'youtube-icon':
      return YoutubeIcon;
    case 'linkedin-icon':
      return LinkedinIcon;
    case 'logo-alt':
      return LogoAlt;
    case 'box-icon':
      return BoxIcon;
    case 'ideas-icon':
      return IdeasIcon;
    case 'magnifier-user-icon':
      return MagnifierUserIcon;
    case 'phone-email-icon':
      return PhoneEmailIcon;
    case 'add-user-icon':
      return AddUserIcon;
    case 'bubble-edit-icon':
      return BubbleEditIcon;
    case 'team-icon':
      return TeamIcon;
    case 'open-icon':
      return OpenIcon;
    case 'open-key':
      return OpenKey;
    case 'umbrella-icon':
      return UmbrellaIcon;
    case 'bulletlist-icon':
      return BulletListIcon;
    case 'heart-icon':
      return HeartIcon;
    case 'cloud-icon':
      return CloudIcon;
    case 'planet-icon':
      return PlanetIcon;
    case 'plane-icon':
      return PlaneIcon;
    case 'suitcase-icon':
      return SuitcaseIcon;
    case 'lightbulb-icon':
      return LightbulbIcon;
    case 'coffee-icon':
      return CoffeeIcon;
    case 'target-icon':
      return TargetIcon;
    case 'clock-icon':
      return ClockIcon;
    case 'chart-icon':
      return ChartIcon;
    case 'letter-icon':
      return LetterIcon;
    case 'house-icon':
      return HouseIcon;
    case 'bike-icon':
      return BikeIcon;
    case 'darkumbrella-icon':
      return DarkUmbrellaIcon;
    case 'calculator-icon':
      return CalculatorIcon;
    case 'star-icon':
      return StarIcon;
    case 'pig-icon':
      return PigIcon;
    case 'headphones-icon':
      return HeadphonesIcon;
    case 'telephone-icon':
      return TelephoneIcon;
    case 'monitor-icon':
      return MonitorIcon;
    case 'lens-icon':
      return LensIcon;
    case 'camera-icon':
      return CameraIcon;
    case 'bag-icon':
      return BagIcon;
    case 'handdrawn-scratched-circle':
      return HanddrawnScratchedCircle;
    case 'lines-circle-icon':
      return LinesCircleIcon;
    case 'three-line-icon':
      return ThreeLineIcon;
    case 'yw-icon':
      return YWIcon;
    case 'curved-line-icon':
      return CurvedLineIcon;
    case 'logo':
    default:
      return Logo;
  }
};

export default React.memo(function SVG({ name, ...rest }) {
  const Component = getImage(name);
  return <Component {...rest} />;
});
