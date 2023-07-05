export default function pull<T>(arr: T[], ...args: T[]): T[] {
  const pulledArr: T[] = []

  for (const arg of args) {
    if (!arr.includes(arg)) {
      pulledArr.push(arg)
    }
  }

  return pulledArr
}
