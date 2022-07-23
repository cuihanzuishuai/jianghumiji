type Flatter<T> = T extends Array<infer V> ? Flatter<V> : T
type D = Flatter<Array<Array<number>>>


type Nested<T> = (T | (T | T[])[])[]
const nested: Nested<number> = [[[1]]]
console.log('nested', nested)