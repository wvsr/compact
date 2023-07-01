export default function chunk(arr: any[], chunkCount: number): any[] {
  const chunkArr: any[] = []
  let sliceCount = 0
  for (let i = 0; i < arr.length; i++) {
    chunkArr.push(arr.slice(sliceCount, sliceCount + chunkCount))
    sliceCount = sliceCount + chunkCount
    if (sliceCount >= arr.length) {
      break
    }
  }
  return chunkArr
}
