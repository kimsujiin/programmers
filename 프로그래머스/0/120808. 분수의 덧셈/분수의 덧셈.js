function solution(numer1, denom1, numer2, denom2) {
    const num = denom1 * numer2 + denom2 * numer1
    const denom =  denom1 * denom2
    let maxNum = 1;
    
    for(let i=1; i<=num; i++){
    if(num%i ===0 && denom%i ===0)
        maxNum =i;
    }

    return [num / maxNum,denom / maxNum]
    
}
