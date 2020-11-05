import React from 'react';
import styled from 'styled-components/native';

interface TextProps {
  readonly color?: string;
  readonly margin?: string;
  readonly padding?: string;

  // font-size
  readonly title?: boolean;
  readonly large?: boolean;
  readonly medium?: boolean;
  readonly small?: boolean;
  readonly tiny?: boolean;

  // font-weight
  readonly light?: boolean;
  readonly bold?: boolean;
  readonly heavy?: boolean;
  readonly black?: boolean;

  // text-align
  readonly center?: boolean;
  readonly right?: boolean;
}

const TextStyle: React.FC<TextProps> = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text<TextProps>`
  color: ${(props) => props.color ?? '#000'};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};

  ${({ title, large, medium, small, tiny }) => {
    switch (true) {
      case title:
        return `font-size: 32px;`;
      case large:
        return `font-size: 18px;`;
      case medium:
        return `font-size: 15px;`;
      case small:
        return `font-size: 11px;`;
      case tiny:
        return `font-size: 10px;`;
      default:
        return `font-size: 13px;`;
    }
  }}

  ${({ light, bold, heavy, black }) => {
    switch (true) {
      case light:
        return `font-weight: 200;`;
      case bold:
        return `font-weight: 700;`;
      case heavy:
        return `font-weight: 700;`;
      case black:
        return `font-weight: 900;`;
      default:
        return `font-weight: 400;`;
    }
  }}

  ${({ center, right }) => {
    switch (true) {
      case center:
        return `text-align: center;`;
      case right:
        return `text-align: right;`;
      default:
        return `text-align: left;`;
    }
  }}
`;

export default TextStyle;
