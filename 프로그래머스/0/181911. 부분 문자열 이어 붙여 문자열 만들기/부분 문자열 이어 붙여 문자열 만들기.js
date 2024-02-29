function solution(my_strings, parts) {
    let result = '';
    
    for(let i = 0; i< my_strings.length; i++){
        
        let [s, e] = parts[i];
        let substring = my_strings[i].substring(s, e + 1)
        result += substring
        
    }
    
    
    
    return result;
}