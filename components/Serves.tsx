import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/colors';

import Text from './Text';

interface Props {
  readonly setQuantity: Function;
  readonly quantity: number;
  readonly min?: number;
  readonly max?: number;
}

const Serves: React.FC<Props> = ({
  setQuantity,
  quantity,
  min = 1,
  max = 8,
}) => {
  return (
    <Container>
      <Text large bold>
        serves:
      </Text>
      <ServesControl>
        <Button
          onPress={() => {
            setQuantity(quantity - 1);
          }}
          disabled={quantity === min}
        >
          <Ionicons
            name="md-remove"
            size={22}
            color={quantity === min ? colors.grey : colors.black}
          />
        </Button>
        <Text large bold center width="32px">
          {quantity}
        </Text>
        <Button
          onPress={() => {
            setQuantity(quantity + 1);
          }}
          disabled={quantity === max}
        >
          <Ionicons
            name="md-add"
            size={22}
            color={quantity === max ? colors.grey : colors.black}
          />
        </Button>
      </ServesControl>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
`;

const ServesControl = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`;

const Button = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
`;

export default Serves;
