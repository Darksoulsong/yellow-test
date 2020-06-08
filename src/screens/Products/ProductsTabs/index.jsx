import React from 'react';
import { Tabs, SVG, Text, Button } from '@components';
import {
  TabHead,
  TabContent,
  ProductTabFooter,
  ProductTabHeader,
  ProductTabText,
  ProductIcon,
  ProductIconGroup,
  ProductIconLabel,
} from './styles';

const ProductIconAlt = ({ variant }) => {
  return (
    <ProductIconGroup variant={variant}>
      <ProductIcon>
        <img src={`images/${variant}-icon-alt.svg`} alt={variant} />
      </ProductIcon>
      <ProductIconLabel>
        <SVG name={`${variant}-text`} />
      </ProductIconLabel>
    </ProductIconGroup>
  );
};

export default function ProductsTabs() {
  return (
    <Tabs>
      <Tabs.Tab
        index={0}
        renderTabHeader={() => (
          <TabHead variant="exec">
            <SVG name="exec-text" />
          </TabHead>
        )}
      >
        <TabContent variant="exec">
          <ProductTabHeader>
            <ProductIconAlt variant="exec" />
          </ProductTabHeader>

          <ProductTabText>
            <Text>
              Lorem ipsum dolor sit amet,{' '}
              <strong>consectetur adipiscing elit</strong>, sed diam nonummy
              nibh eusmod tincidunt ut laoreet dolore magna aliquam erat
              volutpat
            </Text>

            <hr />

            <Text>
              <strong>Ut wisi enim ad minim veniam</strong>, quis nostrud exerci
              tation ullamcorper suscipit lobortis nil ut aliquip ex ea commodo
              consequat.
            </Text>

            <hr />

            <Text>
              Duis autem vel eum iriure dolor in hendrerit{' '}
              <strong>in vulputate velit</strong> esse molestie corper suscipit
              lobortis nisl ut aliquip ex ea comoodo consequat.
            </Text>
          </ProductTabText>

          <ProductTabFooter>
            <Button type="button" variant="primary">
              SIMULE SUA VAGA
            </Button>
          </ProductTabFooter>
        </TabContent>
      </Tabs.Tab>

      <Tabs.Tab
        index={1}
        renderTabHeader={() => (
          <TabHead variant="express">
            <SVG name="express-text" />
          </TabHead>
        )}
      >
        <TabContent variant="express">
          <ProductTabHeader>
            <ProductIconAlt variant="express" />
          </ProductTabHeader>

          <ProductTabText>
            <Text>
              Lorem ipsum dolor sit amet,{' '}
              <strong>consectetur adipiscing elit</strong>, sed diam nonummy
              nibh eusmod tincidunt ut laoreet dolore magna aliquam erat
              volutpat
            </Text>

            <hr />

            <Text>
              <strong>Ut wisi enim ad minim veniam</strong>, quis nostrud exerci
              tation ullamcorper suscipit lobortis nil ut aliquip ex ea commodo
              consequat.
            </Text>

            <hr />

            <Text>
              Duis autem vel eum iriure dolor in hendrerit{' '}
              <strong>in vulputate velit</strong> esse molestie corper suscipit
              lobortis nisl ut aliquip ex ea comoodo consequat.
            </Text>
          </ProductTabText>

          <ProductTabFooter>
            <Button type="button" variant="primary">
              SIMULE SUA VAGA
            </Button>
          </ProductTabFooter>
        </TabContent>
      </Tabs.Tab>

      <Tabs.Tab
        index={2}
        renderTabHeader={() => (
          <TabHead variant="tech">
            <SVG name="tech-text" />
          </TabHead>
        )}
      >
        <TabContent variant="tech">
          <ProductTabHeader>
            <ProductIconAlt variant="tech" />
          </ProductTabHeader>

          <ProductTabText>
            <Text>
              Lorem ipsum dolor sit amet,{' '}
              <strong>consectetur adipiscing elit</strong>, sed diam nonummy
              nibh eusmod tincidunt ut laoreet dolore magna aliquam erat
              volutpat
            </Text>

            <hr />

            <Text>
              <strong>Ut wisi enim ad minim veniam</strong>, quis nostrud exerci
              tation ullamcorper suscipit lobortis nil ut aliquip ex ea commodo
              consequat.
            </Text>

            <hr />

            <Text>
              Duis autem vel eum iriure dolor in hendrerit{' '}
              <strong>in vulputate velit</strong> esse molestie corper suscipit
              lobortis nisl ut aliquip ex ea comoodo consequat.
            </Text>
          </ProductTabText>

          <ProductTabFooter>
            <Button type="button" variant="primary">
              SIMULE SUA VAGA
            </Button>
          </ProductTabFooter>
        </TabContent>
      </Tabs.Tab>

      <Tabs.Tab
        index={3}
        renderTabHeader={() => (
          <TabHead variant="rpo">
            <SVG name="rpo-text" />
          </TabHead>
        )}
      >
        <TabContent variant="rpo">
          <ProductTabHeader>
            <ProductIconAlt variant="rpo" />
          </ProductTabHeader>

          <ProductTabText>
            <Text>
              Lorem ipsum dolor sit amet,{' '}
              <strong>consectetur adipiscing elit</strong>, sed diam nonummy
              nibh eusmod tincidunt ut laoreet dolore magna aliquam erat
              volutpat
            </Text>

            <hr />

            <Text>
              <strong>Ut wisi enim ad minim veniam</strong>, quis nostrud exerci
              tation ullamcorper suscipit lobortis nil ut aliquip ex ea commodo
              consequat.
            </Text>

            <hr />

            <Text>
              Duis autem vel eum iriure dolor in hendrerit{' '}
              <strong>in vulputate velit</strong> esse molestie corper suscipit
              lobortis nisl ut aliquip ex ea comoodo consequat.
            </Text>
          </ProductTabText>

          <ProductTabFooter>
            <Button type="button" variant="primary">
              SIMULE SUA VAGA
            </Button>
          </ProductTabFooter>
        </TabContent>
      </Tabs.Tab>
    </Tabs>
  );
}
