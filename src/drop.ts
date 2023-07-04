export default function drop<T>(arr: T, dropCount: number): T {
  const dropedArr: T = [...arr].slice(dropCount)
  return dropedArr
}
