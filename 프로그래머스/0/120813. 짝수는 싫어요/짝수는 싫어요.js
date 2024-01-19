function solution(n) {
    
    const oddNum = [];
    
    for(let i = 1;i<=n;i++){
       if( i % 2 === 1){
           oddNum.push(i)
       } 
    }
    
       oddNum.sort(function(a,b){
            a-b
       });

    return oddNum;
}

