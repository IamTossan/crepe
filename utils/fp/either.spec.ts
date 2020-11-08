import Either, { Left, Right } from './either';

describe('src/utils/fp/either', () => {
  describe('of', () => {
    it('should return a Right instance', () => {
      const either = Either.of('lol');

      expect(either).toBeInstanceOf(Right);
      expect(either.isLeft).toEqual(false);
      expect(either.isRight).toEqual(true);
    });
  });

  describe('filter', () => {
    it('should return a Right instance', () => {
      const either = Either.of('lol').filter(() => true);

      expect(either).toBeInstanceOf(Right);
      expect(either.isLeft).toEqual(false);
      expect(either.isRight).toEqual(true);
    });

    it('should return a Left instance', () => {
      const either = Either.of('lol').filter(() => false);

      expect(either).toBeInstanceOf(Left);
      expect(either.isLeft).toEqual(true);
      expect(either.isRight).toEqual(false);
    });
  });

  describe('fold', () => {
    it('should execute the left callback', () => {
      let response = null;
      Either.of('lol')
        .filter(() => false)
        .fold(
          () => (response = 'left'),
          () => (response = 'right'),
        );

      expect(response).toEqual('left');
    });

    it('should execute the right callback', () => {
      let response = null;
      Either.of('lol').fold(
        () => (response = 'left'),
        () => (response = 'right'),
      );

      expect(response).toEqual('right');
    });
  });
});
