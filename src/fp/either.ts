import { type Either, left, right } from 'fp-ts/lib/Either'
import { type Predicate } from 'fp-ts/lib/Predicate'

export function fromBoolean<A>(f: Predicate<A>) {
  return (x: A): Either<false, true> => f(x) ? right(true) : left(false)
}
