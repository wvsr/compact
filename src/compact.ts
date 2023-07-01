export default function compact(arr: any[]){
    let compactArr = []
    for(let i=0; i < arr.length; i++){
        if(arr[i]){
            compactArr.push(arr[i])
        }
    }
    return compactArr
}