export default function fill<T>(
  arr: T[],
  fillChar: T = '' as any,
  start: number = 0,
  finish: number = arr.length
): T[] {
  const newArr = [...arr]
  for (let i = start; i < finish; i++) {
    newArr[i] = fillChar
  }
  return newArr
}
