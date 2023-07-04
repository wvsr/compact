function dropRightWhile<T>(
  arr: T[],
  condition: (value: T, index: number, array: T[]) => boolean
): T[] {
  return arr.filter((arr, index, array) => condition(arr, index, array))
}
