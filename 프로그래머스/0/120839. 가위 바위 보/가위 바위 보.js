function solution(rsp) {
    let result =[]
    for(let i=0;i<rsp.length;i++){
        if(rsp[i]==='2'){
            result.push("0")
        }else if(rsp[i]==='5'){
            result.push("2")
        }else {
            result.push("5")
        }
    }
    return result.join('')
}