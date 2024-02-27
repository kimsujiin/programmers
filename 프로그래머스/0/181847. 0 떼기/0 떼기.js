function solution(n_str) {
    let result = '';
    for(let i = 0; i<n_str.length; i++){
        
        if(n_str[i] !== '0'){
            for(let j = i; j<n_str.length; j++){
                result += n_str[j]
            }
            
        break;
        }   
        
        
    }  
    
    return result; 
}