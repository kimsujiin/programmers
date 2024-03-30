function solution(num_list) {
    return num_list.reduce((acc,curr)=>{
        for(; curr >1 ;){
        if(curr %2 === 0){
            curr /= 2;
        }else{
            curr = (curr-1) /2 ;
        }     
            acc++
        }
        return acc; 
    },0)
}

