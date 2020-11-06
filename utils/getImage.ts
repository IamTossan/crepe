import images from '../constants/images';

const getImage = (name: string) => {
  switch (name) {
    case images.crepe:
      return require('../assets/crepe.jpg');
    default:
      return require('../assets/food.png');
  }
};

export default getImage;
