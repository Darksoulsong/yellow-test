import React from 'react';
import { SVG } from '@components';
import {
    Holder,
    HashtagContainer,
    HashtagText,
    SVGManipulator,
} from './styles';

export const Hashtag = () => (
    <Holder>
        <HashtagContainer>
            <HashtagText>
                #YELLOW<strong>WAY</strong>
            </HashtagText>
            <SVGManipulator
                data-aos="animate-three-line"
                data-aos-offset="100"
                type="three-line-icon"
            >
                <SVG name="three-line-icon" />
            </SVGManipulator>
        </HashtagContainer>
        <SVGManipulator
            data-aos="animate-curved-line"
            data-aos-offset="100"
            type="curved-line-icon"
        >
            <SVG name="curved-line-icon" />
        </SVGManipulator>
    </Holder>
)
