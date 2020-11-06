import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

import colors from './constants/colors';
import recipe from './constants/recipe';
import getImage from './utils/getImage';

import Text from './components/Text';
import Serves from './components/Serves';
import Ingredients from './components/Ingredients';

const App = () => {
  const [quantity, updateQuantity] = useState(recipe.baseServes);

  const setQuantity = (newValue: number) => {
    if (newValue < 1 || newValue > 8) {
      return;
    }
    updateQuantity(newValue);
  };

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
