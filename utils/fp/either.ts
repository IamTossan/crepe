export default class Either<E, A> {
  value: E | A;

  get isLeft() {
    return false;
  }

  get isRight() {
    return false;
  }

  constructor(x: A) {
    this.value = x;
  }

  static of(x: any) {
    return new Right(x);
  }

  filter(predicate: (v: E | A) => boolean): Either<E, A> {
    return predicate(this.value) ? Either.of(this.value) : new Left(this.value);
  }

  fold(leftf: Function, rightf: Function) {
    return this.isLeft ? leftf(this.value) : rightf(this.value);
  }
}

export class Left<E> extends Either<E, any> {
  get isLeft() {
    return true;
  }

  get isRight() {
    return false;
  }

  static of(): never {
    throw new Error('`of` called on class Left instead of Either');
  }

  // ----- Functor (Either a)
  map() {
    return this;
  }

  // ----- Monad (Either a)
  chain() {
    return this;
  }

  join() {
    return this;
  }
}

export class Right<A> extends Either<any, A> {
  get isLeft() {
    return false;
  }

  get isRight() {
    return true;
  }

  static of(): never {
    throw new Error('`of` called on class Right instead of Either');
  }

  // ----- Functor (Either a)
  map(fn: Function) {
    return Either.of(fn(this.value));
  }

  // ----- Monad (Either a)
  chain(fn: Function) {
    return fn(this.value);
  }

  join() {
    return this.value;
  }
}

export const filter = <E, A>(p: (v: E | A) => boolean) => (
  e: Either<E, A>,
): Either<E, A> => e.filter(p);

export const fold = <E, A>(
  onLeft: (l: E) => unknown,
  onRight: (r: A) => unknown,
) => (e: Either<E, A>) => e.fold(onLeft, onRight);
