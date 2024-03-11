function solution(binomial) {
    const [a, op , b] = binomial.split(' ')
    
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    
    if(op ==="+"){
        return num1+num2
    }else if(op === '-'){
        return num1 - num2
    }else if( op === "*"){
        return num1 * num2
    }
}