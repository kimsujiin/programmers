function solution(arr1, arr2) {
    //두 배열의 길이를 비교 
    
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : - 1;
    }
    
    // 두 배열의 원소 합을 비교 
    
    const sum1 = arr1.reduce((acc,cur)=>{ return acc+cur},0);
    const sum2 = arr2.reduce((acc,cur)=>{ return acc+cur},0)
    
    if (sum1 !== sum2) {
        
        return sum1 > sum2 ? 1 : -1;
        
    } else {
        
        return 0;
        
    }
    
}