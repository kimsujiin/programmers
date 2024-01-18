function solution(a, b) {
    const sum1 =  Number(a.toString() + b.toString());
    const sum2 = 2*a*b;
    
   return sum1 > sum2 ? sum1:sum2
}