function solution(number) {
    
    let sum = 0;
    
    for(let i = 0; i< number.length; i++){
        sum += parseInt(number[i]);
    }
    
    const remainder = sum % 9
    
    return remainder
}