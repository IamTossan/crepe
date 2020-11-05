import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

import colors from './constants/colors';
import recipe from './constants/recipe';

import Text from './components/Text';

const App = () => {
  const [quantity, setQuantity] = useState(2);
  return (
    <Container>
      <RecipeImage source={require('./assets/crepe.jpg')}></RecipeImage>
      <Content>
        <Recipe>
          <Text title bold>
            Crepe
          </Text>
          <Serves>
            <Text large bold>
              serves:
            </Text>
            <Button
              onPress={() => {
                setQuantity(quantity - 1);
              }}
            >
              <Text large>-</Text>
            </Button>
            <Text large bold>
              {quantity}
            </Text>
            <Button
              onPress={() => {
                setQuantity(quantity + 1);
              }}
            >
              <Text large>+</Text>
            </Button>
          </Serves>
          <Ingredients>
            <Text large bold>
              ingredients:
            </Text>
            {recipe.map((i, idx) => (
              <Ingredient key={idx}>
                <Text medium>{i.label}</Text>
                <Quantity>
                  <Text medium right>
                    {i.ratio * quantity}
                  </Text>
                  <Text medium right>
                    {i.unit && ` ${i.unit}`}
                  </Text>
                </Quantity>
              </Ingredient>
            ))}
          </Ingredients>
        </Recipe>
      </Content>
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

const Content = styled.View`
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

const Serves = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 12px;
`;

const Button = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
`;

const Ingredients = styled.View`
  margin: 12px;
`;

const Ingredient = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

const Quantity = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export default App;
