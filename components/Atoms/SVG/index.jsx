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

import ExecIconAlt from '../../../public/images/exec-icon-alt.svg';
import ExpressIconAlt from '../../../public/images/express-icon-alt.svg';
import RPOIconAlt from '../../../public/images/rpo-icon-alt.svg';
import TechIconAlt from '../../../public/images/tech-icon-alt.svg';

import ExecText from '../../../public/images/exec-text.svg';
import ExpressText from '../../../public/images/express-text.svg';
import RPOText from '../../../public/images/rpo-text.svg';
import TechText from '../../../public/images/tech-text.svg';

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
import LinesCircleIconResponsive from '../../../public/images/lines-circle-icon-responsive.svg';
import ThreeLineIcon from '../../../public/images/three-line-icon.svg';
import ThreeLineThickerIcon from '../../../public/images/three-line-thicker-icon.svg';
import CurvedLineIcon from '../../../public/images/curved-line-icon.svg';
import YWIcon from '../../../public/images/yw-icon.svg';
import StarWhiteIcon from '../../../public/images/star-white-icon.svg';
import HanddrawnArrowIcon1 from '../../../public/images/handdrawn-arrow1.svg';
import HanddrawnArrowIcon2 from '../../../public/images/handdrawn-arrow2.svg';
import HanddrawnArrowIcon3 from '../../../public/images/handdrawn-arrow3.svg';
import HanddrawnArrowIcon4 from '../../../public/images/handdrawn-arrow4.svg';
import HanddrawnArrowIcon5 from '../../../public/images/handdrawn-arrow5.svg';
import HanddrawnArrowIcon6 from '../../../public/images/handdrawn-arrow6.svg';
import HanddrawnArrowIcon7 from '../../../public/images/handdrawn-arrow7.svg';
import HanddrawnArrowIcon8 from '../../../public/images/handdrawn-arrow8.svg';
import KeyIcon from '../../../public/images/key-icon.svg';
import FacebookIcon from '../../../public/images/facebook-icon.svg';
import GoogleIcon from '../../../public/images/google-icon.svg';
import ArrowIcon2 from '../../../public/images/arrow-icon2.svg';
import PaperclipIcon from '../../../public/images/paperclip-icon.svg';
import InteractLike from '../../../public/images/interact-like-icon.svg';
import InteractShare from '../../../public/images/interact-share-icon.svg';
import InteractComment from '../../../public/images/interact-comment-icon.svg';
import CaretIcon from '../../../public/images/caret-icon.svg';
import Team2Icon from '../../../public/images/team2-icon.svg';
import TurnOnIcon from '../../../public/images/turn-on-icon.svg';
import DeliveryIcon from '../../../public/images/delivery-icon.svg';
import DocumentIcon from '../../../public/images/document-icon.svg';
import PlusCircleIcon from '../../../public/images/plus-circle-icon.svg';
import PlusSignalsIcon from '../../../public/images/plus-signals-icon.svg';

const getStyles = (size, invert) => {
  const style = {};

  if (size) {
    style.width = size;
    style.height = 'auto';
  }

  if (invert) {
    style.transform = `rotate(-180deg)`;
  }

  return style;
};

const getComponent = name => {
  switch (name) {
    case 'handdrawn-arrow':
      return HanddrawnArrow;
    case 'logo-transparent-stroked':
      return LogoTransparentStroked;
    case 'handdrawn-scratches':
      return HanddrawnScratches;
    case 'handdrawn-circle':
      return HanddrawnCircle;

    case 'exec-icon-alt':
      return ExecIconAlt;
    case 'express-icon-alt':
      return ExpressIconAlt;
    case 'rpo-icon-alt':
      return RPOIconAlt;
    case 'tech-icon-alt':
      return TechIconAlt;

    case 'exec-icon':
      return ExecIcon;
    case 'express-icon':
      return ExpressIcon;
    case 'rpo-icon':
      return RPOIcon;
    case 'tech-icon':
      return TechIcon;
    case 'exec-text':
      return ExecText;
    case 'express-text':
      return ExpressText;
    case 'rpo-text':
      return RPOText;
    case 'tech-text':
      return TechText;
    case 'bubbles-icon':
      return BubblesIcon;
    case 'arrow-icon':
      return ArrowIcon;
    case 'arrow-icon2':
      return ArrowIcon2;
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
    case 'lines-circle-icon-responsive':
      return LinesCircleIconResponsive;
    case 'three-line-icon':
      return ThreeLineIcon;
    case 'three-line-thicker-icon':
      return ThreeLineThickerIcon;
    case 'yw-icon':
      return YWIcon;
    case 'curved-line-icon':
      return CurvedLineIcon;
    case 'key-icon':
      return KeyIcon;
    case 'facebook-icon':
      return FacebookIcon;
    case 'google-icon':
      return GoogleIcon;
    case 'star-white-icon':
      return StarWhiteIcon;
    case 'handdrawn-arrow1':
      return HanddrawnArrowIcon1;
    case 'handdrawn-arrow2':
      return HanddrawnArrowIcon2;
    case 'handdrawn-arrow3':
      return HanddrawnArrowIcon3;
    case 'handdrawn-arrow4':
      return HanddrawnArrowIcon4;
    case 'handdrawn-arrow5':
      return HanddrawnArrowIcon5;
    case 'handdrawn-arrow6':
      return HanddrawnArrowIcon6;
    case 'handdrawn-arrow7':
      return HanddrawnArrowIcon7;
    case 'handdrawn-arrow8':
      return HanddrawnArrowIcon8;
    case 'paperclip-icon':
      return PaperclipIcon;
    case 'interact-like':
      return InteractLike;
    case 'interact-comment':
      return InteractComment;
    case 'interact-share':
      return InteractShare;
    case 'caret-icon':
      return CaretIcon;
    case 'team2-icon':
      return Team2Icon;
    case 'turn-on-icon':
      return TurnOnIcon;
    case 'delivery-icon':
      return DeliveryIcon;
    case 'document-icon':
      return DocumentIcon;
    case 'plus-circle-icon':
      return PlusCircleIcon;
    case 'plus-signals-icon':
      return PlusSignalsIcon;
    case 'logo':
    default:
      return Logo;
  }
};

export default function SVG({ name, size, invert, ...rest }) {
  const Component = getComponent(name);
  return <Component {...rest} style={getStyles(size, invert)} />;
}
