import images from './images';

export type Ingredient = {
  label: string;
  ratio: number;
  unit: string;
};

type Recipe = {
  name: string;
  image: string;
  baseServes: number;
  ingredients: Array<Ingredient>;
};

export default <Recipe>{
  name: 'Crepe',
  image: images.crepe,
  baseServes: 2,
  ingredients: [
    {
      label: 'farine',
      ratio: 125 / 2,
      unit: 'g',
    },
    {
      label: 'oeufs',
      ratio: 1,
      unit: '',
    },
    {
      label: 'lait',
      ratio: 125,
      unit: 'mL',
    },
    {
      label: 'beurre',
      ratio: 25 / 2,
      unit: 'g',
    },
    {
      label: 'sucre',
      ratio: 20,
      unit: 'g',
    },
  ],
};
