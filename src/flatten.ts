export default function flatten<T extends ArrayLike<any>>(arr: T[]): T[] {
  let flatedArr: T[] = []
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index])) {
      for (let flatIn = 0; flatIn < arr[index].length; flatIn++) {
        flatedArr.push(arr[index][flatIn])
      }
    } else {
      flatedArr.push(arr[index])
    }
  }
  return flatedArr
}
