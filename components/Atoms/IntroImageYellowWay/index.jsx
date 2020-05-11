import React from 'react';

import { SVG } from '@components';

import {
  YellowWayIntroImageRoot,
  ImageHolder,
  Image,
  Arrow1,
  Arrow2,
  Arrow3,
  Arrow4,
  Arrow5,
  Arrow6,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  BlockItem1,
  BlockItem2,
  BlockItem3,
  BlockItem4,
  BlockItem5,
  BlockItem6,
  ImageItem1,
  ImageItem2,
  ImageItem3,
  ImageItem4,
  ImageItem5,
  ImageItem6,
} from './styles';

export default function IntroImageYellowWay() {
  return (
    <YellowWayIntroImageRoot>
      <div>
        <ImageHolder>
          <ImageItem1>
            <Image
              alt="Qualidade de Vida"
              src="/images/yellow-way-intro/yellow-way-intro1.jpg"
            />
          </ImageItem1>
          <ImageItem2>
            <Image
              alt="Nosso DNA Amarelo"
              src="/images/yellow-way-intro/yellow-way-intro2.jpg"
            />
          </ImageItem2>
          <ImageItem3>
            <Image
              alt="Comunicação"
              src="/images/yellow-way-intro/yellow-way-intro3.jpg"
            />
          </ImageItem3>
          <ImageItem4>
            <Image
              alt="Empreender juntos"
              src="/images/yellow-way-intro/yellow-way-intro4.jpg"
            />
          </ImageItem4>
          <ImageItem5>
            <Image
              alt="Liberdade para Expressar"
              src="/images/yellow-way-intro/yellow-way-intro5.jpg"
            />
          </ImageItem5>
          <ImageItem6>
            <Image
              alt="Feedback"
              src="/images/yellow-way-intro/yellow-way-intro6.jpg"
            />
          </ImageItem6>

          <BlockItem1>
            <Item1>
              #nosso<strong>DNAamarelo</strong>
            </Item1>
            <Arrow1>
              <SVG name="handdrawn-arrow1" />
            </Arrow1>
          </BlockItem1>

          <BlockItem2>
            <Item2>
              #empreender<strong>juntos</strong>
            </Item2>
            <Arrow2>
              <SVG name="handdrawn-arrow2" />
            </Arrow2>
          </BlockItem2>

          <BlockItem3>
            <Item3>
              #qualidadede<strong>vida</strong>
            </Item3>
            <Arrow3>
              <SVG name="handdrawn-arrow3" />
            </Arrow3>
          </BlockItem3>

          <BlockItem4>
            <Item4>
              #feed<strong>backs</strong>
            </Item4>
            <Arrow4>
              <SVG name="handdrawn-arrow6" />
            </Arrow4>
          </BlockItem4>

          <BlockItem5>
            <Item5>
              #comunic<strong>ação</strong>
            </Item5>
            <Arrow5>
              <SVG name="handdrawn-arrow4" />
            </Arrow5>
          </BlockItem5>

          <BlockItem6>
            <Item6>
              #liberdadepara<strong>expressar</strong>
            </Item6>
            <Arrow6>
              <SVG name="handdrawn-arrow5" />
            </Arrow6>
          </BlockItem6>
        </ImageHolder>
      </div>
    </YellowWayIntroImageRoot>
  );
}
