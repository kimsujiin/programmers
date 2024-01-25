function solution(num_list) {
    let oddN = '';
    let evenN = '';
    
    for(let num of num_list){
        if(num % 2 === 0){
            evenN += num;
        }
        else{
            oddN += num;
        }
    }    
    
  return Number(oddN)+ Number(evenN);
}