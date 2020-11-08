import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

import colors from './constants/colors';
import recipe from './constants/recipe';
import getImage from './utils/getImage';
import Either, { filter, fold } from './utils/fp/either';
import { pipe } from './utils/fp/core';

import Text from './components/Text';
import Serves from './components/Serves';
import Ingredients from './components/Ingredients';

const App = () => {
  const [quantity, updateQuantity] = useState(recipe.baseServes);

  const isAboveMin = (v: number) => v >= 1;
  const isUnderMax = (v: number) => v <= 8;

  const setQuantity = pipe(
    Either.of,
    filter(isAboveMin),
    filter(isUnderMax),
    fold(() => {}, updateQuantity),
  );

  return (
    <Container>
      <RecipeImage source={getImage(recipe.image)}></RecipeImage>
      <RecipeContent>
        <Recipe>
          <Text title bold>
            {recipe.name}
          </Text>
          <Serves quantity={quantity} setQuantity={setQuantity} />
          <Ingredients quantity={quantity} ingredients={recipe.ingredients} />
        </Recipe>
      </RecipeContent>
      <StatusBar style="auto" />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: space-between;
`;

const RecipeImage = styled.Image`
  width: 100%;
  height: 40%;
`;

const RecipeContent = styled.View`
  width: 100%;
  height: 65%;
  bottom: 5%;
  background-color: ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

const Recipe = styled.View`
  flex: 1;
`;

export default App;
