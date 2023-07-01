export default function chunk(arr: any[], chunkCount: number):any[]{
    const chunkArr:any[] = []
    let sliceCount = 0
    for(let i=0; i<arr.length; i++){
        chunkArr.push(arr.slice(sliceCount, chunkCount))
        sliceCount = sliceCount + chunkCount
    }
    return chunkArr
}