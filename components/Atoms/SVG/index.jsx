import React from 'react';
import Logo from '../../../public/images/logo.svg';
import LogoAlt from '../../../public/images/logo-alt.svg';
import LogoTransparentStroked from '../../../public/images/logo-transparent-stroked.svg';
import HanddrawnArrow from '../../../public/images/handdrawn-arrow.svg';
import HanddrawnScratches from '../../../public/images/handdrawn-scratches.svg';
import HanddrawnCircle from '../../../public/images/handdrawn-circle2.svg';
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
    case 'logo':
    default:
      return Logo;
  }
};

export default React.memo(function SVG({ name, ...rest }) {
  const Component = getImage(name);
  return <Component {...rest} />;
});
