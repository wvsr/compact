export default function findIndex<T>(
  arr: T[],
  predicate: (value: T) => boolean,
  startFrom: number = 0
) {
  let index: number = -1
  for (let valIndex = startFrom; valIndex < arr.length; valIndex++) {
    if (predicate(arr[valIndex])) {
      index = valIndex
      break
    }
  }
  return index
}
