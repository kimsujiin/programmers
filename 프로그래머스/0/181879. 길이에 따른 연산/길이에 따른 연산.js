function solution(num_list) {
    if(num_list.length >=11){
        
        let sum = num_list.reduce((acc,cur)=>{
            return acc + cur 
        },0)
        
        return sum 
    }else{
        
        let product = num_list.reduce((acc,cur)=>{
            return acc * cur
        },1)
        
        return product
    }
}