import React from 'react';
import styled from 'styled-components/native';

import { Ingredient } from '../constants/recipe';

import Text from './Text';

interface Props {
  readonly quantity: number;
  readonly ingredients: Array<Ingredient>;
}

const Ingredients: React.FC<Props> = ({ quantity, ingredients }) => {
  return (
    <Container>
      <Text large bold>
        ingredients:
      </Text>
      {ingredients.map((i, idx) => (
        <IngredientContainer key={idx}>
          <Text medium>{i.label}</Text>
          <Quantity>
            <Text medium right>
              {i.ratio * quantity}
            </Text>
            <Text medium right>
              {i.unit && ` ${i.unit}`}
            </Text>
          </Quantity>
        </IngredientContainer>
      ))}
    </Container>
  );
};

const Container = styled.View`
  margin: 12px;
`;

const IngredientContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

const Quantity = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export default Ingredients;
